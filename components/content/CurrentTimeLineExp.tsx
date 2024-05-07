import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.esolution.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Esolution Tecnologia
          </a>
          |02 de setembro - 2019 Atual
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          Analista de desenvolvimento de sistemas ( Javascript, React, React
          Native, NextJS, CSS) - BACKEND ( NodeJS, C#)
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Município de Morrinhos - GO</TimelineEvent.Title>
        <TimelineEvent.Description>
          Setor de informática
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Município de Acreúna - GO</TimelineEvent.Title>
        <TimelineEvent.Description>
          Técnico em petroquímica
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Município de Quirinópolis - GO
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          Supervisor administrativo
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Comint Informática EIRELI | 16 de maio de 2008 - 27 de outubro de 2008
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          Supervisor administrativo
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Município de Morrinhos - GO</TimelineEvent.Title>
        <TimelineEvent.Description>
          Setor de informática
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
