import { BackButton } from '@src/presentation/components/TelegramBackBtn/TelegramBackBtn';
import styles from './Day4.module.css';
import { Card } from '../../components/Card';
import { Pm } from '../../components/Pm';
import { Separator } from '../../components/Separator';
import { useEffect } from 'react';
import { miniApp } from '@telegram-apps/sdk-react';
import { Header } from '../../components/Header';
import { Paragraphs } from '../../components/Paragraphs';
import { Icon } from '@src/presentation/components/Icon';

export const Day4 = () => {

  useEffect(()=>{
    miniApp.setHeaderColor('#FDAE37')
  },[])

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} width="100%" height="259" viewBox="0 0 375 259" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.7502 312C128.945 232.888 72.0043 216.309 -1.58585 223.322C-45.83 227.54 -50.0866 173.696 -12.5435 154.188C33.1721 126.404 83.3633 156.413 129.76 164.544C162.195 165.407 176.886 132.432 152.843 110.348C133.506 93.672 115.653 68.865 128.994 42.952C147.382 5.03054 197.804 14.2678 220.012 44.3984C240.978 64.0154 253.335 125.431 284.748 117.616C300.011 113.812 298.503 97.9746 303.246 86.1728C314.143 56.8079 356.928 51.2291 375 76.8261" stroke="#F9EEE0" strokeWidth="36" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>

      <BackButton />
      <Header 
        header={'День 4'}
        subHeader={'Новый сценарий'}
      />

      <Pm />

      <Paragraphs>
        <p>Ну что, девушки, готовы к финальному дню нашего марафона?</p>
        <p>За эти дни мы:</p>
        <ul>
          <li>Разобрались, почему сложно выбирать себя и откуда взялась эта привычка.</li>
          <li>Нашли, какие выгоды стоят за старым сценарием.</li>
          <li>Познакомились со своим внутренним сопротивлением.</li>
        </ul>
        <p>Сегодня мы делаем последний шаг — создаём новый сценарий.</p>
        <p>Синдром хорошей девочки — это не только про отказы. Это про привычку строить жизнь вокруг ожиданий других людей.</p>
        <ul>
          <li>Как научиться выбирать себя не на словах, а в реальной жизни?</li>
          <li>Как перестать бояться чужого мнения?</li>
          <li>Как закрепить изменения, чтобы они стали естественной частью тебя?</li>
        </ul>
        <p>Сегодня мы ответим на эти вопросы, я подготовила для вас максимально практический контент.</p>
      </Paragraphs>

      <Card 
        header='План на сегодня:'
      >
        <div className={styles.cardWrapper}>
          <ul className={styles.numberUl}>
            <li>Переписываем сценарий: как я хочу жить теперь?</li>
            <li>Учимся справляться с виной (да, она может прийти — и мы знаем, что с ней делать).</li>
          </ul>
        </div>
      </Card>

      <Separator>
        Задание<br/>«Как создать <br/>новый сценарий?»
      </Separator>

      <Paragraphs>
        <p>Чтобы его создать - надо его сначала увидеть, и понять какой он.</p>
        <p>Ниже, ты видишь группы вопросов,  которые помогут в этом.</p>
      </Paragraphs>

      <Card
        subHeader={'Возьми листик, ручку, выдели 15 минут времени, и ответь на все вопросы письменно.'}
      >
        <div className={styles.container}>
          <Icon name={'message-question'}/>
          <div className={styles.h3}>Выбери, как ты хочешь жить теперь.</div>
        </div>
        <ul>
          <li>Какая ты, когда выбираешь себя?</li>
          <li>Как ты говоришь, действуешь, принимаешь решения?</li>
        </ul>
        <div className={styles.container}>
          <Icon name={'message-question'}/>
          <div className={styles.h3}>Найди точки, где старый сценарий включается автоматически.</div>
        </div>
        <ul>
          <li>Где ты чаще всего предаёшь себя? В каких ситуациях?</li>
          <li>В какой конкретно момент ты выбираешь не себя?</li>
        </ul>
        <div className={styles.container}>
          <Icon name={'message-question'}/>
          <div className={styles.h3}>Выбери новый вариант поведения.</div>
        </div>
        <ul>
          <li>Как ты хочешь поступить по-другому?</li>
          <li>Что ты скажешь?</li>
        </ul>
      </Card>

      <Separator>
        Как справиться<br/>с виной после<br/> отказа?
      </Separator>

      <Paragraphs>
        <p>
          <span>Ты наконец сказала «нет», но вместо облегчения накатила волна тревоги?<br/></span>
          «А вдруг я его обидела?»,<br/>
          «Может, стоило согласиться?»,<br/>
          «Что обо мне теперь подумают?»
        </p>
        <p>
          <span>Чувство вины — это эмоциональная ловушка.
          Но оно не означает, что ты сделала что-то плохое. В данном случае, это просто сигнал, что твой мозг не привык выбирать себя.</span>
        </p>
      </Paragraphs>

      <Card
        header={'Как ослабить чувство вины:'}
      >
        
        <div className={styles.container2}>
          <div className={styles.h4}>
            1. Выбери, как ты хочешь жить теперь.
          </div>
          <p>Закрой глаза: где она ощущается? Может, это тяжесть в груди или напряжение в животе?</p>
          <p>Назови её:<br/>«Я чувствую вину, потому что…».</p>
        </div>

        <div className={styles.container2}>
          <div className={styles.h4}>
            2. Раздели ответственность.
          </div>
          <p>
            Ты не несёшь ответственность за чужие эмоции.
            <br/>Взрослые люди могут справляться с отказами и находить другие варианты.
          </p>
        </div>

        <div className={styles.container2}>
          <div className={styles.h4}>
            3. Переформулируй ситуацию.
          </div>
          <p className={styles.paragraph}>Вместо:</p>
          <div className={styles.container4}>
            <Icon name={'dislike'}/>
            <div className={styles.h2}>«Я отказала и теперь чувствую себя ужасно»</div>
          </div>
          <p className={styles.paragraph}>Скажи себе:</p>
          <div className={styles.container4}>
            <Icon name={'like'}/>
            <div className={styles.h2}>«Я выбрала свои интересы,<br/>и это нормально».</div>
          </div>
          <div className={styles.container4}>
            <Icon name={'like'}/>
            <div className={styles.h2}>«Моё „нет“ защищает меня от перегрузки и выгорания».</div>
          </div>
        </div>
      </Card>

      
      <Paragraphs>
        <p>Какой из шагов тебе понравился, и помог больше всего</p>
        <p>Вина — это просто привычка.<br/>А привычки можно менять.</p>
      </Paragraphs>
      <button className={styles.button}>Завершить 4 день {'>'}</button>
    </div>
  );
};