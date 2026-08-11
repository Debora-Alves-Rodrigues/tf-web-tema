import prisma from "./client.js";

async function main() {

  const artista1 = await prisma.artista.create({
    data: {
      nome: "Joanna",
      biografia: "Essa é uma biografia.",
      fotoUrl: "https://exemplo.com/joanna.jpg",
      email: "joanna@exemplo.com",
      numeroTelefone: "99999999999",
      instagram: "@joannadesenha",
      senhaHash: "hash-ficticio",
    },
  });

  console.log("OK - Artista");

  const cliente1 = await prisma.cliente.create({
    data: {
      nome: "Pedro",
      fotoUrl: "https://exemplo.com/pedro.jpg",
      email: "pedro@exemplo.com",
      numeroTelefone: "11777777777",
      senhaHash: "hash-ficticio",
    },
  });

  console.log("OK - Cliente");

  const obra1 = await prisma.obraDeArte.create({
    data: {
      titulo: "Azul",
      preco: 1500.0,
      fotoUrl: "https://exemplo.com/azul.jpg",
      legenda: "Uma tela azul escuro.",
      dataDeCriacao: new Date("10-08-2026"),
      dimensoes: "50x70 cm",

      artistaId: artista1.id,
    },
  });

  console.log("OK - Obras");
}

main()