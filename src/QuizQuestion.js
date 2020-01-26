import React, {Component} from 'react'

class QuizQuestion extends Component{

    render(){
        return (
            <main>
                <selection>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </selection>
                <section className="buttons">
                    <ul>
                       <li>{this.props.quiz_question.answer_options[0]}</li>
                    </ul>
                </section>
            </main>
        )
    }
}
export default QuizQuestion