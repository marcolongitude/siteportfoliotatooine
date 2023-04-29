'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
        <TimelineEvent.Title>
          <a href='https://www.esolution.com.br' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Esolution Tecnologia</a>
          | setembro - 2019 Atual
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          Desenvolvimento FRONTEND ( Javascript, React, React Native, NextJS, CSS) - BACKEND ( NodeJS, C#)
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Prodata | Janeiro. 1999 - março. 2012</TimelineEvent.Title>
        <TimelineEvent.Description>
          Implantação de sistemas
        </TimelineEvent.Description>
      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;