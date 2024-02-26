import Editora from "../modelo/Editora";

class ControleEditora {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      new Editora(1, "Alta Books"),
      new Editora(2, "Pearson"),
      new Editora(3, "Addison Wesley"),
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
