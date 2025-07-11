import { makeAutoObservable } from 'mobx';

interface TestResult {
  score: number;
  level: string;
  description: string;
}

interface Question {
  title: string,
  desc: string,
}

class QuizStore {
  private _score: number = 0;
  private _currentQuestionIndex: number = 0;
  private _isCompleted: boolean = false;
  private _result: TestResult | null = null;
  
  public readonly questions: Question[] = [
    {
      title: 'Как я реагирую на просьбы?',
      desc: 'Когда я отказываю, мне важно объяснить своё решение так, чтобы человек не обиделся.'
    },
    {
      title: 'Как я реагирую на просьбы?',
      desc: 'Если я отказываю, я чувствую тревогу и начинаю искать оправдания.'
    },
    {
      title: 'Что происходит после отказа?',
      desc: 'После отказа я долго прокручиваю ситуацию в голове и переживаю, правильно ли я поступила.'
    },
    {
      title: 'Что происходит после отказа?',
      desc: 'Я ловлю себя на мысли, что хочу «компенсировать» свой отказ – сделать что-то хорошее взамен.'
    },
    {
      title: 'Как я веду себя в сложных разговорах?',
      desc: 'Я соглашаюсь с собеседником, даже если думаю иначе, чтобы не испортить отношения.'
    },
    {
      title: 'Как я веду себя в сложных разговорах?',
      desc: 'Мне сложно попросить о помощи – вдруг откажут, и мне будет неловко?'
    },
    {
      title: 'Как я отношусь к чужому мнению?',
      desc: 'Если кто-то мной недоволен, мне становится не по себе, даже если я ничего плохого не сделала.'
    },
    {
      title: 'Как я отношусь к чужому мнению?',
      desc: 'Я часто оправдываюсь, даже когда от меня этого не ждут.'
    },
    {
      title: 'Как я отношусь к чужим границам?',
      desc: 'Когда мне отказывают, я чувствую разочарование или обиду, даже если понимаю, что у человека есть причины.'
    },
    {
      title: 'Как я отношусь к чужим границам?',
      desc: 'Если близкий человек говорит «нет», у меня возникает желание спросить «почему?» и обсудить это.'
    },
    {
      title: 'Как я чувствую себя, когда делаю что-то для себя?',
      desc: 'Когда я выбираю что-то только для себя (отдых, покупки, время на хобби), мне кажется, что я поступаю эгоистично.'
    },
    {
      title: 'Как я чувствую себя, когда делаю что-то для себя?',
      desc: 'Я испытываю неловкость, если отказываюсь от участия в общем деле, даже если мне это неинтересно.'
    },
    {
      title: 'Как я реагирую на конфликты?',
      desc: 'Я часто беру на себя ответственность за чужие эмоции и стараюсь всех помирить.'
    },
    {
      title: 'Как я реагирую на конфликты?',
      desc: 'Если человек расстроен из-за моего отказа, я чувствую, что сделала что-то не так.'
    },
    {
      title: 'Как я чувствую себя, когда мне нужна помощь?',
      desc: 'Я предпочитаю справляться сама, даже если мне тяжело, чтобы никого не обременять.'
    },
    {
      title: 'Как я чувствую себя, когда мне нужна помощь?',
      desc: 'Когда мне помогают, я чувствую, что должна что-то дать взамен.'
    },
    {
      title: 'Как я оцениваю свою ценность?',
      desc: 'Я часто измеряю свою ценность тем, насколько я полезна окружающим.'
    },
    {
      title: 'Как я оцениваю свою ценность?',
      desc: 'Если я не помогаю другим, мне кажется, что я недостаточно хорошая.'
    },
    {
      title: 'Как я отношусь к своим успехам?',
      desc: 'Когда меня хвалят, мне неловко, и я начинаю умалять свои заслуги.'
    },
    {
      title: 'Как я отношусь к своим успехам?',
      desc: 'Если я сделала что-то хорошо, мне хочется, чтобы это заметили, но я боюсь показаться самоуверенной.'
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get calculateResult(): { score: number; description: string } {
    if (this._score >= 17 && this._score <= 20) {
        return {
            score: this._score,
            description: "Синдром «хорошей девочки» по-прежнему сильно влияет на вашу жизнь, но теперь через тревогу, вину и страх последствий отказа"
        };
    } else if (this._score >= 12 && this._score <= 16) {
        return {
            score: this._score,
            description: "Вы стали более осознанными, но всё ещё ориентируетесь на ожидания окружающих"
        };
    } else if (this._score >= 6 && this._score <= 11) {
        return {
            score: this._score,
            description: "В целом, вы уверенно ставите границы, но иногда возвращаетесь в старые модели поведения"
        };
    } else {
        return {
            score: this._score,
            description: "Вы уже практически свободны от синдрома, умеете выдерживать чужую реакцию и не чувствуете вины за свои границы"
        };
    }
  }

  get score(): number {
    return this._score;
  }

  get currentQuestion(): Question {
    return this.questions[this._currentQuestionIndex];
  }

  get currentQuestionNumber(): number {
    return this._currentQuestionIndex + 1;
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  get progress(): number {
    return (this._currentQuestionIndex / this.questions.length) * 100;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get result(): TestResult | null {
    return this._result;
  }

  answerYes(): void {
    this._score++;
    this.nextQuestion();
  }

  answerNo(): void {
    this.nextQuestion();
  }

  private nextQuestion(): void {
    if (this._currentQuestionIndex < this.questions.length - 1) {
      this._currentQuestionIndex++;
    } else {
      this.completeTest();
    }
  }

  private completeTest(): void {
    this._isCompleted = true;
  }

  reset(): void {
    this._score = 0;
    this._currentQuestionIndex = 0;
    this._isCompleted = false;
    this._result = null;
  }
}

export const quizStore = new QuizStore();