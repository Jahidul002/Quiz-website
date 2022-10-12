import { CFormCheck } from '@coreui/react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AnsTheQuiz.css'


const AnsTheQuiz = ({ data }) => {

    const { correctAnswer, question, options } = data
    const [corAns, setCorAns] = useState()

    const handlecorrectAnswer = () => {
        setCorAns(correctAnswer)
        toast(correctAnswer)
    };
    function handleAns(ans) {
        if (ans === correctAnswer) {
            toast('Right Answer')
        }
        else {
            toast("Wrong Answer")
        }
    }
    return (
        <div>
            <div className='qs-bg text-center mb-10 container mx-auto rounded-lg'>
                <div>
                    <p>{question.slice(3, -4)}</p>
                    <EyeIcon onClick={() => handlecorrectAnswer()} className="h-5 w-5 text-white" />
                    <ToastContainer />
                </div>
                <div className='md:grid grid-cols-2 grid-rows-2'>
                    {
                        options.map(qs => <CFormCheck onClick={() => handleAns({ qs }.qs)} className='option text-black font-semibold p-5 rounded-lg' type="radio" name="flexRadioDefault" id="flexRadioDefault1" label={qs} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default AnsTheQuiz;