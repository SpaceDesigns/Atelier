/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './questionList.jsx';
import Search from './searchBar.jsx';
import AddQuestion from './Forms/questionform.jsx';
import Modal from './Modal/Modal.jsx';
import { Question_AnswerStyled, SeeMoreQuestionStyled } from '../Styles/Q&A/container.styled';
import { MoreQuestionBtnStyled } from '../Styles/Q&A/buttons.styled';
import { AppContext } from '../../AppContext.jsx';
import { IDContext } from '../../IDContext.jsx';

const axios = require('axios');

export default function QuestionListContainer() {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [search, setSearch] = useState([]);
  const [count, setCount] = useState(4);
  const [datalength, setDataLength] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name } = useContext(AppContext);
  const { product_id } = useContext(IDContext);
  const [helpulBtn, setHelpfulBtnClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    axios({
      method: 'get',
      url: `/qa/questions`,
      params: {
        product_id,
        page: 1,
        count: 1000,
      }
    })
      .then(({ data }) => {
        ReactDOM.unstable_batchedUpdates(() => {
          setQuestions(data.results.slice(0, count));
          setDataLength(data.results.length);
          setAllQuestions(data.results);
        });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, [product_id]);

  useEffect(() => {
    setQuestions(allQuestions.slice(0, count));
  }, [count]);

  useEffect(() => {
    setQuestions(search);
  }, [search]);

  const fetchHelpfulData = (question_id) => {
    setHelpfulBtnClick(true);
    axios({
      method: 'put',
      url: `/qa/answers/${question_id}/helpful`
    })
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  }

  const reportQ = (question_id) => {
    axios({
      method: 'put',
      url: `/qa/questions/${question_id}/report`
    })
      .then(() => {
        fetchData();
        alert('Question has been reported successfully');
      })
      .catch((error) => console.log(error));
  }

  let question = null;
  if(questions !== undefined) {
    if (search.length === 0 ) {
      question = questions.map((question) => (
        <QuestionList
          key={question.question_id}
          helpfulness={fetchHelpfulData}
          reportQ={reportQ}
          question={question}
          helpfulClick={helpulBtn}
          setHelpfulBtnClick={setHelpfulBtnClick}
        />
      ));
    } else {
      question = search.map((question) => (
        <QuestionList
          key={question.question_id}
          helpfulness={fetchHelpfulData}
          reportQ={reportQ}
          question={question}
          helpfulClick={helpulBtn}
          setHelpfulBtnClick={setHelpfulBtnClick}
        />
      ));
    }
  }

  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };

  // validate form and then send to api
  const onFormValidation = (data) => {
    const questionData = {...data, product_id}
    axios.post(`/questions/questions/`, questionData)
      .then(() => console.log('successful posting questions'))
      .catch((error) => console.log('failed to post question', error));
    setIsModalOpen(false);
  };

  return (
    <>
      { isModalOpen
        ? (
          <Modal
            title="Ask Your Question"
            description={`About ${name}`}
            isOpen={isModalOpen}
            onCloseRequest={onModalCloseRequest}
          >
            <AddQuestion onFormValidation={onFormValidation} />
          </Modal>
        )
        : null }

          <Question_AnswerStyled>
        <Search setSearch={setSearch} allQuestions={allQuestions} />
        </Question_AnswerStyled>

      <Question_AnswerStyled>

        {question}

      </Question_AnswerStyled>
      <SeeMoreQuestionStyled>
        {(search.length === 0) && (datalength > count || questions.length > 4)
          ? (
            <MoreQuestionBtnStyled type="button" onClick={() => setCount((prevCount) => prevCount + 2)}>
              SEE
              { ` (${datalength - count})` }
              {' '}
              MORE ANSWERED QUESTIONS
            </MoreQuestionBtnStyled>
          )
          : null }
        <MoreQuestionBtnStyled type="button" onClick={() => setIsModalOpen(true)}>ADD A QUESTION  +</MoreQuestionBtnStyled>
      </SeeMoreQuestionStyled>

    </>
  );
}
