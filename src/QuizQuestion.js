import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{

    render(){
        const items = this.props.quiz_question.answer_options.map((answer_option, index) => 
        <li key={index}>
            <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text=
        {answer_option}/>
        </li>);
        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {items}
                       
                    </ul>
                </section>
            </main>
        )
    }
    handleClick(buttonText){
        if(this.props.quiz_question.answer === buttonText){
            this.props.showNextQuestionHandler()
        }
        else{
        alert("wrong answer");
        }
    }
}
export default QuizQuestion