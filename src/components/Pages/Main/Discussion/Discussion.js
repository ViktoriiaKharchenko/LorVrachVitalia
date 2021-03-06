import React from "react";
import classes from "./Discussion.module.scss"
import Heading from "../Heading/Heading";
import Question from "../../ Question/Question";
import {NavLink} from "react-router-dom";


const Discussion = () => {
    let questions = [{
        date: "12/12/12",
        public: true,
        title: "Лечение неврита",
        age: 22,
        name: "Сергей",
        backTrace: "example@example.com",
        text: "Подскажите, пожалуйста, какие есть методики успешного лечения неврита слухового нерва, или хотя бы остановки процесса потери слуха?",
        answer: "Когда речь идет о неврите слухового нерва (сенсоневральная тугоухость), в первую очередь, необходимо четко определить тип сенсоневральной тугоухости (острая, хроническая, прогрессирующая, инфекционного или сосудистого происхождения и т.д.), в зависимости от чего, будет более эффективна та или иная схема лечения. По степени и уровню повреждения слухового анализатора и давности заболевания можно предположить о возможной эффективности лечения в каждом конкретном случае заболевания.\n" +
            "Очень важно, в каждом случае заболевания, провести инструментальное обследование слухового анализатора (аудиометрия, импедансометрия, отоакустическая эмиссия, костно-стволовые вызванные потенциалы, импедансометрия и др.), без которого невозможно правильно установить диагноз и, соответственно, правильно подобрать схему лечения.\n" +
            "Схема лечения, в любом случае, должна быть комплексной, когда на ряду с медикаментозными препаратами используются физиотерапевтические методы лечения. В большинстве случаев требуется длительный курс лечения (до нескольких месяцев), в ряде случаев требуются повторные поддерживающие курсы приема медикаментов и контрольные инструментальные обследования в динамике. Более эффективным будет лечение, если прием медикаментов начат с внутривенного и внутримышечного введения препаратов (от 10 дней до 6 недель), а затем продолжен прием таблетированных препаратов.\n" +
            "Если повреждения слухового анализатора имеют необратимый характер, то во всех случаях требуется поддерживающее медикаментозное лечение или же слухопротезирование с помощью современных слуховых аппаратов, которые могут социально адаптировать практически любую степень снижения слуха, а так же, что очень важно, устранить шумовые эффекты.\n" +
            "Наиболее эффективно лечение, начатое в максимально ранние сроки от начала заболевания и в наиболее полном объеме."
    },{
        date: "12/12/12",
        public: true,
        title: "Лечение неврита",
        age: 22,
        name: "Сергей",
        backTrace: "example@example.com",
        text: "Подскажите, пожалуйста, какие есть методики успешного лечения неврита слухового нерва, или хотя бы остановки процесса потери слуха?",
        answer: "Когда речь идет о неврите слухового нерва (сенсоневральная тугоухость), в первую очередь, необходимо четко определить тип сенсоневральной тугоухости (острая, хроническая, прогрессирующая, инфекционного или сосудистого происхождения и т.д.), в зависимости от чего, будет более эффективна та или иная схема лечения. По степени и уровню повреждения слухового анализатора и давности заболевания можно предположить о возможной эффективности лечения в каждом конкретном случае заболевания.\n" +
            "Очень важно, в каждом случае заболевания, провести инструментальное обследование слухового анализатора (аудиометрия, импедансометрия, отоакустическая эмиссия, костно-стволовые вызванные потенциалы, импедансометрия и др.), без которого невозможно правильно установить диагноз и, соответственно, правильно подобрать схему лечения.\n" +
            "Схема лечения, в любом случае, должна быть комплексной, когда на ряду с медикаментозными препаратами используются физиотерапевтические методы лечения. В большинстве случаев требуется длительный курс лечения (до нескольких месяцев), в ряде случаев требуются повторные поддерживающие курсы приема медикаментов и контрольные инструментальные обследования в динамике. Более эффективным будет лечение, если прием медикаментов начат с внутривенного и внутримышечного введения препаратов (от 10 дней до 6 недель), а затем продолжен прием таблетированных препаратов.\n" +
            "Если повреждения слухового анализатора имеют необратимый характер, то во всех случаях требуется поддерживающее медикаментозное лечение или же слухопротезирование с помощью современных слуховых аппаратов, которые могут социально адаптировать практически любую степень снижения слуха, а так же, что очень важно, устранить шумовые эффекты.\n" +
            "Наиболее эффективно лечение, начатое в максимально ранние сроки от начала заболевания и в наиболее полном объеме."
    },{
        date: "12/12/12",
        public: true,
        title: "Лечение неврита",
        age: 22,
        name: "Сергей",
        backTrace: "example@example.com",
        text: "Подскажите, пожалуйста, какие есть методики успешного лечения неврита слухового нерва, или хотя бы остановки процесса потери слуха?",
        answer: "Когда речь идет о неврите слухового нерва (сенсоневральная тугоухость), в первую очередь, необходимо четко определить тип сенсоневральной тугоухости (острая, хроническая, прогрессирующая, инфекционного или сосудистого происхождения и т.д.), в зависимости от чего, будет более эффективна та или иная схема лечения. По степени и уровню повреждения слухового анализатора и давности заболевания можно предположить о возможной эффективности лечения в каждом конкретном случае заболевания.\n" +
            "Очень важно, в каждом случае заболевания, провести инструментальное обследование слухового анализатора (аудиометрия, импедансометрия, отоакустическая эмиссия, костно-стволовые вызванные потенциалы, импедансометрия и др.), без которого невозможно правильно установить диагноз и, соответственно, правильно подобрать схему лечения.\n" +
            "Схема лечения, в любом случае, должна быть комплексной, когда на ряду с медикаментозными препаратами используются физиотерапевтические методы лечения. В большинстве случаев требуется длительный курс лечения (до нескольких месяцев), в ряде случаев требуются повторные поддерживающие курсы приема медикаментов и контрольные инструментальные обследования в динамике. Более эффективным будет лечение, если прием медикаментов начат с внутривенного и внутримышечного введения препаратов (от 10 дней до 6 недель), а затем продолжен прием таблетированных препаратов.\n" +
            "Если повреждения слухового анализатора имеют необратимый характер, то во всех случаях требуется поддерживающее медикаментозное лечение или же слухопротезирование с помощью современных слуховых аппаратов, которые могут социально адаптировать практически любую степень снижения слуха, а так же, что очень важно, устранить шумовые эффекты.\n" +
            "Наиболее эффективно лечение, начатое в максимально ранние сроки от начала заболевания и в наиболее полном объеме."
    },{
        date: "12/12/12",
        public: true,
        title: "Лечение неврита",
        age: 22,
        name: "Сергей",
        backTrace: "example@example.com",
        text: "Подскажите, пожалуйста, какие есть методики успешного лечения неврита слухового нерва, или хотя бы остановки процесса потери слуха?",
        answer: "Когда речь идет о неврите слухового нерва (сенсоневральная тугоухость), в первую очередь, необходимо четко определить тип сенсоневральной тугоухости (острая, хроническая, прогрессирующая, инфекционного или сосудистого происхождения и т.д.), в зависимости от чего, будет более эффективна та или иная схема лечения. По степени и уровню повреждения слухового анализатора и давности заболевания можно предположить о возможной эффективности лечения в каждом конкретном случае заболевания.\n" +
            "Очень важно, в каждом случае заболевания, провести инструментальное обследование слухового анализатора (аудиометрия, импедансометрия, отоакустическая эмиссия, костно-стволовые вызванные потенциалы, импедансометрия и др.), без которого невозможно правильно установить диагноз и, соответственно, правильно подобрать схему лечения.\n" +
            "Схема лечения, в любом случае, должна быть комплексной, когда на ряду с медикаментозными препаратами используются физиотерапевтические методы лечения. В большинстве случаев требуется длительный курс лечения (до нескольких месяцев), в ряде случаев требуются повторные поддерживающие курсы приема медикаментов и контрольные инструментальные обследования в динамике. Более эффективным будет лечение, если прием медикаментов начат с внутривенного и внутримышечного введения препаратов (от 10 дней до 6 недель), а затем продолжен прием таблетированных препаратов.\n" +
            "Если повреждения слухового анализатора имеют необратимый характер, то во всех случаях требуется поддерживающее медикаментозное лечение или же слухопротезирование с помощью современных слуховых аппаратов, которые могут социально адаптировать практически любую степень снижения слуха, а так же, что очень важно, устранить шумовые эффекты.\n" +
            "Наиболее эффективно лечение, начатое в максимально ранние сроки от начала заболевания и в наиболее полном объеме."
    }];

    if (window.innerWidth < 700){
        questions = questions.slice(0,1)
    }else if (window.innerWidth < 1100){
        questions = questions.slice(0,2)
    }else if (window.innerWidth < 1600){
        questions = questions.slice(0,3)
    }

    questions = questions.map((element, index) => {
        let shortTitle = element.title.slice(0, 30);
        if (element.title.length > 30) {
            shortTitle = shortTitle + "...";
        }

        return (
            element.public ?
                < Question index = {index} key={index} shortTitle={shortTitle} text={element.text} answer={element.answer}/>
                : null
        )
    })

    return (

        <>
            <Heading text={"Популярные вопросы"}/>
                <div className={classes.PostsWrapper}>
                    {questions}
                </div>
                <NavLink to={"/Questions"} exact={false}>
                    <button  className={classes.MoreButton}>Больше вопросов</button>
                </NavLink>
        </>
    )
}
export default Discussion