import { CFormCheck } from '@coreui/react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';



const AnsTheQuiz = ({ data }) => {
    const { correctAnswer, question, options } = data
    const [corAns, setCorAns] = useState()
    const handlecorrectAnswer = () => {
        setCorAns(correctAnswer)
    }
    return (
        <div>
            <div className='text-center bg-red-500 p-5 mx-10 my-10 rounded-md'>
                <div className='bg-purple-400 p-5'>
                    {question}
                    {corAns}
                    <EyeIcon onClick={() => handlecorrectAnswer()} className="h-5 w-5 text-white" />
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    {
                        options.map(qs => <CFormCheck className='bg-green-400 p-5 rounded-lg' type="radio" name="flexRadioDefault" id="flexRadioDefault1" label={qs} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default AnsTheQuiz;