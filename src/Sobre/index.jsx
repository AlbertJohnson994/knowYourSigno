import { Link } from "react-router-dom";
import { BackLink } from "./styles";
import LOGOFILLED from "../img/LOGOFILLED.png";

import {
  Container,
  Heading,
  Paragraph,
  SpanHighlight,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "./styles";

function Sobre() {
  return (
    <>
      <Container>
        <Heading>
          🐾 Topic: Animal Symbols and Zodiac Meanings in Human Culture.
        </Heading>
        <Paragraph>
          This project explores the fascinating world of animal symbols and
          their meanings in various cultures, particularly in relation to the
          zodiac. Each animal represents unique traits and characteristics that
          resonate with human experiences. The project delves into how these
          symbols influence our understanding of ourselves and the world around
          us.
        </Paragraph>

        <Heading>📘 Introduction</Heading>
        <Paragraph>
          The project aims to uncover the significance of animal symbols in
          different cultures, focusing on their connections to the zodiac. By
          examining these symbols, we can gain insights into human behavior,
          personality traits, and cultural values. Animals have played a vital
          role in human spirituality, psychology, and storytelling across
          civilizations. Their characteristics are often projected onto human
          experiences, creating rich symbolic systems like the zodiac and spirit
          animals. In both Western and Eastern traditions, animals serve as
          guides, archetypes, and messengers, reflecting aspects of human
          personality, fate, and inner potential. This exploration reveals how
          animals are not just creatures of the wild—but mirrors of the human
          soul.
        </Paragraph>

        <Heading>📜 History of Animal Symbolism in Zodiac and Culture</Heading>
        <Paragraph>
          The history of animal symbolism in the zodiac and culture is rich and
          diverse, spanning across various civilizations and belief systems. In
          ancient cultures, animals were often revered as sacred beings,
          embodying spiritual significance and representing different aspects of
          life. The zodiac, with its twelve signs, is deeply rooted in astrology
          and mythology, where each sign is associated with specific animals
          that symbolize certain traits and characteristics. For example, the
          lion in the zodiac represents courage and strength, while the fish
          symbolizes intuition and adaptability.
          <br />
          <br />
          <SpanHighlight>Ancient Civilizations:</SpanHighlight> The Egyptians
          worshipped animals like cats (Bastet), jackals (Anubis), and falcons
          (Horus).
          <br />
          <SpanHighlight>Chinese Zodiac (since ~2637 BCE):</SpanHighlight> Based
          on a 12-year cycle, each year is represented by an animal.
          <br />
          <SpanHighlight>
            Western Astrology (~2400 years ago):
          </SpanHighlight>{" "}
          Twelve signs, many represented by animals, tied to constellations.
          <br />
          <SpanHighlight>Indigenous Beliefs:</SpanHighlight> Native American,
          Celtic, and African traditions use animal totems as spiritual guides.
        </Paragraph>

        <Heading>📚 Main Content</Heading>
        <Paragraph>
          1. Zodiac Animals and Personality — Each month aligns with symbolic
          animals, reflecting core energies.
        </Paragraph>
        <Paragraph>
          2. Cultural Significance — Meanings vary across cultures, impacting
          mythology and social identity.
        </Paragraph>
        <Paragraph>
          3. Animal Totems and Spirit Animals — Seen as personal guides and
          reflections of the inner self.
        </Paragraph>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Zodiac Sign</TableHeader>
              <TableHeader>Animal Symbol</TableHeader>
              <TableHeader>Personality Traits</TableHeader>
              <TableHeader>Cultural Significance</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Aries</TableCell>
              <TableCell>Ram</TableCell>
              <TableCell>Bold, energetic, adventurous</TableCell>
              <TableCell>Symbolizes leadership and courage</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Taurus</TableCell>
              <TableCell>Bull</TableCell>
              <TableCell>Reliable, patient, practical</TableCell>
              <TableCell>Represents strength and determination</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gemini</TableCell>
              <TableCell>Twins</TableCell>
              <TableCell>Adaptable, curious, communicative</TableCell>
              <TableCell>Symbolizes duality and versatility</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cancer</TableCell>
              <TableCell>Cancer Crab</TableCell>
              <TableCell>Emotional, nurturing, intuitive</TableCell>
              <TableCell>Represents protection and family</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Leo</TableCell>
              <TableCell>Lion</TableCell>
              <TableCell>Confident, charismatic, creative</TableCell>
              <TableCell>Symbolizes royalty and leadership</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Virgo</TableCell>
              <TableCell>Virgin</TableCell>
              <TableCell>Analytical, practical, detail-oriented</TableCell>
              <TableCell>Represents purity and service</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Libra</TableCell>
              <TableCell>Scales</TableCell>
              <TableCell>Diplomatic, balanced, social</TableCell>
              <TableCell>Symbolizes harmony and justice</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Scorpio</TableCell>
              <TableCell>Scorpion</TableCell>
              <TableCell>Intense, passionate, mysterious</TableCell>
              <TableCell>Represents transformation and power</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sagittarius</TableCell>
              <TableCell>Archer</TableCell>
              <TableCell>Optimistic, adventurous, philosophical</TableCell>
              <TableCell>Symbolizes exploration and freedom</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Capricorn</TableCell>
              <TableCell>Goat</TableCell>
              <TableCell>Disciplined, ambitious, responsible</TableCell>
              <TableCell>Represents perseverance and success</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aquarius</TableCell>
              <TableCell>Water Bearer</TableCell>
              <TableCell>Innovative, humanitarian, independent</TableCell>
              <TableCell>Symbolizes progress and vision</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pisces</TableCell>
              <TableCell>Fish</TableCell>
              <TableCell>Compassionate, artistic, intuitive</TableCell>
              <TableCell>Represents empathy and spirituality</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Heading>🧠 Conclusion</Heading>
        <Paragraph>
          The exploration of animal symbols and their meanings in relation to
          the zodiac reveals a profound connection between humans and nature.
          These symbols serve as mirrors, reflecting our inner selves and
          guiding us through life's journey. Understanding these symbols isn’t
          just about superstition—it’s about insight, growth, and connection.
        </Paragraph>
      </Container>

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Sobre o Oráculo</h1>
        <p className="mb-6">
          Este oráculo revela seu signo, animal do zodíaco chinês e animal
          espiritual com base na sua data de nascimento.
        </p>

        <footer style={{ textAlign: "center", margin: "2rem auto", maxWidth: "600px" }}>
           <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Referências</h2>
          <ul className="list-disc list-inside" style={{ textAlign: "left", listStyle: "none", marginLeft: "1.5rem" }}>
            <li>
              <a
                href="https://pt.wikipedia.org/wiki/Zod%C3%ADaco_chin%C3%AAs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Zodíaco Chinês - Wikipedia
              </a>
            </li>
            <li>
              <a
                href="https://pt.wikipedia.org/wiki/Zod%C3%ADaco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Zodíaco - Wikipedia
              </a>
            </li>
            <li>
              <a
                href="https://pt.wikipedia.org/wiki/Animais_sagrados"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Animais Sagrados - Wikipedia
              </a>
            </li>
          </ul>
        </div> 

  <p className="text-sm text-gray-600">
    <img
      src={LOGOFILLED}
      alt="LOGO"
      style={{ maxWidth: "40px", display: "block", margin: "0 auto", padding: "0.5rem 0" }}
    />
    Developed by Albert Johnson & Matheus Costa da Silva
  </p>

  <Link to="/" component={BackLink}>
    ← Voltar
  </Link>

        
        </footer>
        
      </div>
    </>
  );
}

export default Sobre;
