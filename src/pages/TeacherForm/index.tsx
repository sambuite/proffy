import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import { Container, Main, Footer } from './styles';

const TeacherForm = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const history = useHistory();

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  };

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  };

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              name="avatar"
              label="Avatar"
              type="text"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              type="text"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Ciência', label: 'Ciência' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => (
              <div key={item.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={item.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda' },
                    { value: '2', label: 'Terça' },
                    { value: '3', label: 'Quarta' },
                    { value: '4', label: 'Quinta' },
                    { value: '5', label: 'Sexta' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={item.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={item.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
