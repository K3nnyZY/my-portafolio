import { FiArrowUp } from "react-icons/fi";
import Container from "@/components/layout/Container";
import type { PortfolioContent } from "@/types/portfolio";

export default function Footer({ content }: { content: PortfolioContent }) {
  return (
    <footer className="site-footer">
      <Container className="footer-container">
        <div>
          <a className="brand-name" href="#home">
            Kenny Zhu
          </a>
          <p>{content.footer.description}</p>
        </div>
        <p>
          © {new Date().getFullYear()} Kenny Zhu {content.footer.rights}
        </p>
        <a className="back-top" href="#home">
          {content.footer.top}
          <FiArrowUp aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
