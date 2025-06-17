
import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import z1 from "../img/z1.jpg";
import z2 from "../img/z2.jpg";
import z3 from "../img/z3.jpg";
import z4 from "../img/z4.jpg";
import z5 from "../img/z5.jpg";
import z6 from "../img/z6.jpg";
import z7 from "../img/z7.jpg";
import LOGOFILLED from "../img/LOGOFILLED.png";

import {
  Container,
  Title,
  Form,
  Input,
  Button,
  ResultBox,
  ResultTitle,
  ResultText,
  LinkBox,
  StyledLink
} from "./styles";

function Entrada() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [chineseZodiac, setChineseZodiac] = useState("");
  const [spiritAnimal, setSpiritAnimal] = useState("");

  const zodiacSigns = [
    { sign: "Capricórnio", start: "12-22", end: "01-19" },
    { sign: "Aquário", start: "01-20", end: "02-18" },
    { sign: "Peixes", start: "02-19", end: "03-20" },
    { sign: "Áries", start: "03-21", end: "04-19" },
    { sign: "Touro", start: "04-20", end: "05-20" },
    { sign: "Gêmeos", start: "05-21", end: "06-20" },
    { sign: "Câncer", start: "06-21", end: "07-22" },
    { sign: "Leão", start: "07-23", end: "08-22" },
    { sign: "Virgem", start: "08-23", end: "09-22" },
    { sign: "Libra", start: "09-23", end: "10-22" },
    { sign: "Escorpião", start: "10-23", end: "11-21" },
    { sign: "Sagitário", start: "11-22", end: "12-21" },
  ];

  const chineseZodiacAnimals = [
    "Rato", "Boi", "Tigre", "Coelho", "Dragão", "Serpente",
    "Cavalo", "Cabra", "Macaco", "Galo", "Cão", "Porco",
  ];

  const spiritAnimals = [
    "Lobo", "Águia", "Coruja", "Raposa", "Urso",
    "Leão", "Pantera", "Cavalo", "Golfinho", "Borboleta",
  ];

  const handleSubmit = e => {
    e.preventDefault();
    if (!dob) return;

    const date = new Date(dob);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const dateStr = `${month}-${day}`;

    const sign = zodiacSigns.find(({ start, end }) => {
      if (start > end) return dateStr >= start || dateStr <= end;
      return dateStr >= start && dateStr <= end;
    });
    setZodiac(sign?.sign || "Desconhecido");

    const baseYear = 2020;
    const offset = (year - baseYear) % 12;
    setChineseZodiac(chineseZodiacAnimals[(offset + 12) % 12]);

    const randomSpirit = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    setSpiritAnimal(randomSpirit);
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center px-4">
      <Container>
        <div className="w-full h-[300px] rounded-lg overflow-hidden mb-6">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2000}
            className="h-full"
          >
            {[z1, z2, z3, z4, z5, z6, z7].map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`zodiac${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <p className="legend">
                  {index % 2 === 0 ? "Segredos do universo" : "Descubra seu destino"}
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        <Title>🔮 Oráculo</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300"
          />
          <Input
            placeholder="Data de nascimento"
            type="date"
            value={dob}
            onChange={e => setDob(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300"
          />
          <Button type="submit">Resposta do Oráculo</Button>
        </Form>

        {(zodiac || chineseZodiac || spiritAnimal) && (
          <ResultBox>
            <ResultTitle>Olá {name || "visitante"}!</ResultTitle>
            <ResultText>🌞 Signo do Zodíaco: <strong>{zodiac}</strong></ResultText>
            <ResultText>🐉 Animal Chinês: <strong>{chineseZodiac}</strong></ResultText>
            <ResultText>🧙‍♀️ Animal Espiritual: <strong>{spiritAnimal}</strong></ResultText>
          </ResultBox>
        )}

        <LinkBox>
          <StyledLink to="/Sobre">Clique para saber mais</StyledLink>
        </LinkBox>
      </Container>
    </div>
  );
}

export default Entrada;
