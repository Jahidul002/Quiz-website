import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AnsTheQuiz from '../AnsTheQuiz/AnsTheQuiz';

const QuizPage = () => {
    const quizData = useLoaderData()
    // console.log(quizData.data.questions);
    return (
        <div>
            {
                quizData.data.questions.map(qs => <AnsTheQuiz key={qs.id} ids={qs.id} data={qs}></AnsTheQuiz>)
            }
        </div>
    );
};

export default QuizPage;