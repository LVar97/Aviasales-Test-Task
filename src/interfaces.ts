// сам билет, включает в себя остальные сущности
export interface ITicket {
  id: string;
  // Цена в рублях
  price: number;
  // идентификатор компании которая осуществляет перевозку
  companyId: string;
  // Массив идентификаторов перелётов
  segments: string[];
}

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
type CityCodes = 'MOW' | 'HKT' | 'HKG' | 'JNB' | 'PTB' | 'ARH' | 'TRN' | 'KRS' | 'SRT' | 'LOS' | 'EKV' | 'EKT';

// список перелётов
export interface ISegment {
  id: string;
  // Код города откуда вылет
  origin: CityCodes;
  // Код города куда летим
  destination: CityCodes;
  // Дата и время вылета
  date: string | number;
  // Массив кодов городов с пересадками
  stops: CityCodes[];
  // Длительность полета в минутах
  duration: number;
}

// компания
export interface ICompany {
  id: string;
  // Название компании
  name: string;
  // Имя логотипа
  // Т.к. картинки пока храниться будут у Вас локально - имя и путь к картинке можете замапить на те что будут у вас
  logo: string;
}
