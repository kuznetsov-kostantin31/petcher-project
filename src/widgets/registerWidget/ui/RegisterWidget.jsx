import React from 'react';
import PetButton from "../../../shared/ui/button/petButton";
import PetInput from "../../../shared/ui/input/petInput";
import './registerWidget.scss'
import PetSelect from "../../../shared/ui/select/petSelect";

const RegisterWidget = () => {
    return (
        <form>
            <div className="centered">
                <h3>Введите своё имя</h3>
                <PetInput placeholder="Александр Довжик"/>
                <h3>Введите свой логин</h3>
                <PetInput placeholder="ausdam"/>
                <h3>Email</h3>
                <PetInput placeholder="marmok@example.com" type="email"/>
                <h3>Пароль</h3>
                <PetInput style={{marginBottom: "12px"}} placeholder="superkryt1337" type="password"/>
                <PetInput type="password"/>
                <h3>Выберите специальность</h3>
                <PetSelect>
                    <option value="">Frontend-разработчик</option>
                    <option value="">Python-разработчик</option>
                    <option value="">1С-разработчик</option>
                    <option value="">Java-разработчик</option>
                    <option value="">Web-дизайнер</option>
                </PetSelect>
                <PetButton type="submit" href="/feedback">
                    Далее
                </PetButton>
            </div>
        </form>
    );
};

export default RegisterWidget;