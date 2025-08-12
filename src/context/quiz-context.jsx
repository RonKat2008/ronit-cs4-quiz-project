import React, { createContext, useState } from "react";

// Create a Context for the quiz
export const QuizContext = createContext();

// QuizProvider component wraps our app and provides quiz state and methods
export const QuizProvider = ({ children }) => {
  // Custom 7-question quiz about LeBron James
  const quizData = [
    {
      question: "In which year was LeBron James born?",
      options: ["1982", "1984", "1986", "1988"],
      answer: "1984",
    },
    {
      question: "Which team drafted LeBron James first overall in 2003?",
      options: [
        "Los Angeles Lakers",
        "Miami Heat",
        "Cleveland Cavaliers",
        "Chicago Bulls",
      ],
      answer: "Cleveland Cavaliers",
    },
    {
      question: "How many NBA championships has LeBron James won?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      question: "Which jersey numbers has LeBron James worn in his NBA career?",
      options: ["6 and 23", "8 and 24", "3 and 30", "7 and 32"],
      answer: "6 and 23",
    },
    {
      question: "Which high school did LeBron James attend?",
      options: [
        "Oak Hill Academy",
        "St. Vincent–St. Mary High School",
        "Mater Dei High School",
        "IMG Academy",
      ],
      answer: "St. Vincent–St. Mary High School",
    },
    {
      question: "Which year did LeBron James win his first NBA championship?",
      options: ["2009", "2011", "2012", "2013"],
      answer: "2012",
    },
    {
      question: "Which NBA team did LeBron defeat to win his first championship?",
      options: [
        "San Antonio Spurs",
        "Oklahoma City Thunder",
        "Golden State Warriors",
        "Dallas Mavericks",
      ],
      answer: "Oklahoma City Thunder",
    },
  ];

  // Initialize userAnswers as an array with a null value for each question
  const initialAnswers = quizData.map(() => null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  // Function to update the answer for a given question index
  const setAnswerForQuestion = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  // Reset function to restart the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(quizData.map(() => null));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setAnswerForQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
