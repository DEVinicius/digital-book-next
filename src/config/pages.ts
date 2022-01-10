export interface IPageConfig {
    image: string;
    content: string;
}

export const pages = [
    {
        image: "https://cdn.pixabay.com/photo/2021/11/21/22/08/british-shorthair-6815375_1280.jpg",
        content: "Um Gatinho fofinho olhando para cima, semelhante ao slogan do filme do Leonardo di Caprio que se encontra na Netflix, as poses são iguais. Quem copiou quem? Nunca saberemos"
    },
    {
        image: "https://cdn.pixabay.com/photo/2021/06/25/10/19/monkey-6363455_1280.jpg",
        content: "Macaco dormindo em posição fetal, relembrando a sua vida enquanto estava na barriga de sua mãe."
    },
    {
        image:"https://cdn.pixabay.com/photo/2022/01/01/18/37/butterfly-6908608_1280.jpg",
        content: "Borboletinha que não foi para a cozinha, apenas realizar seus ultimos trabalhos, antes de partir dessa vida para o melhor que há por vir. CHOREMOS PELA VIDA DA BORBOLETA, que possivelmente nao existe mais."
    }
] as IPageConfig[];