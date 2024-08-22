import React from 'react';
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json';
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend';
import 'kalend/dist/styles/index.css';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';
import useListaDeEventos from '../../state/hooks/useListaDeEventos';

// Definindo a interface para os eventos
// interface IKalendEvento {
//   id?: number;
//   startAt: string;
//   endAt: string;
//   summary: string;
//   color: string;
// }

const Calendario: React.FC = () => {
  const eventosKalend: CalendarEvent[] = [];
  const eventos = useListaDeEventos(); // Assume que isso retorna uma lista de eventos
  const atualizarEvento = useAtualizarEvento(); // Assume que isso é uma função para atualizar eventos

  eventos.forEach(evento => {
    eventosKalend.push({
      id: evento.id, // Adiciona o ID, se necessário
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue' // Define a cor do evento
    });
  });

  const onEventDragFinish: OnEventDragFinish = (
    kalendEventoInalterado: CalendarEvent,
    kalendEventoAtualizado: CalendarEvent
  ) => {
    const evento = eventos.find(evento => evento.descricao === kalendEventoAtualizado.summary);
    if (evento) {
      const eventoAtualizado = {
        ...evento,
        inicio: new Date(kalendEventoAtualizado.startAt),
        fim: new Date(kalendEventoAtualizado.endAt)
      };
      atualizarEvento(eventoAtualizado); // Atualiza o evento
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={eventosKalend} // Passa o array de eventos
        initialDate={new Date().toISOString()} // Define a data inicial do calendário
        hourHeight={60} // Altura das horas no calendário
        initialView={CalendarView.WEEK} // Vista inicial do calendário
        timeFormat={'24'} // Formato de hora
        weekDayStart={'Monday'} // Primeiro dia da semana
        calendarIDsHidden={['work']} // IDs de calendário escondidos
        language={'customLanguage'} // Idioma customizado
        customLanguage={ptBR} // Configurações de idioma
        onEventDragFinish={onEventDragFinish} // Função chamada ao terminar o arrasto de um evento
      />
    </div>
  );
}

export default Calendario;
