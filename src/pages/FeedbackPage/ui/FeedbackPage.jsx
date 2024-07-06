import React, {useState} from 'react';
import PetHeader from "../../../widgets/header/ui/PetHeader";
import PetFooter from "../../../widgets/footer/ui/PetFooter";
import PetInput from "../../../shared/ui/input/petInput";
import PetButton from "../../../shared/ui/button/petButton";
import './FeedbackPage.scss'

const FeedbackPage = () => {
    const [modal, setModal] = useState(false)
    return (
        <div>
            <PetHeader/>
            <div className="feedback-content">
                <div className="wrapper">
                    <div className="feedback-description">
                        <h1>Спасибо за регистрацию!</h1>
                        <h4>Пожалуйста, ответьте на несколько вопросов</h4>
                    </div>
                    <form action="" method="post">
                        <h3>Была ли информация на сайте актуальной и полезной для вас?</h3>
                        <PetInput placeholder="Возможно..."/>
                        <h3>Как бы вы оценили дизайн сайта по шкале от 1 до 5?</h3>
                        <PetInput placeholder="1-5"/>
                        <h3>Будете ли вы пользоваться данным сайтом в будущем?</h3>
                        <PetInput placeholder="Думаю что..."/>
                        <PetButton
                            type="submit"
                            style={{border: "1px solid #9e9e9e", background: "none", color: "#9e9e9e", boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.05)"}}
                            onClick={() => setModal(true)}
                        >
                            Отправить
                        </PetButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;