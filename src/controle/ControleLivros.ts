import Livro from "../modelo/Livros";

class ControleLivros {
  livros: Livro[];

  constructor() {
    this.livros = [
      new Livro(
        1,
        1,
        "Use a Cabeça: Java",
        "Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java",
        ["Bert Bates", "Kathy Sierra"]
      ),
      new Livro(
        2,
        2,
        "Java, como Programar",
        "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
        ["Paul Deitel", "Harvey Deitel"]
      ),
      new Livro(
        3,
        3,
        "Core Java for the Impatient",
        "eaders familiar with Horstmann's original, two-volume",
        ["Cay Horstmann"]
      ),
    ];
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const maiorCodigo = this.livros.reduce(
      (max, livro) => (livro.codigo > max ? livro.codigo : max),
      0
    );
    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    const index = this.livros.findIndex(
      (livro) => livro.codigo === codigoLivro
    );
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
