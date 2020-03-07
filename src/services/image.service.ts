
function possuiSuporteAoWebP(): Promise<boolean> {
  const imagem = new Image();

  return new Promise(resolve => {
    imagem.onload = function () {
      const carregou = (imagem.width > 0) && (imagem.height > 0);
      resolve(true)
    };

    imagem.onerror = function () {
      resolve(false)
    };

    imagem.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
  })
}

export async function obterImagem(nome: string): Promise<string> {
  if (await possuiSuporteAoWebP()) {
    return nome + ".webp"
  }
  return nome + ".jpg"
}
