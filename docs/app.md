# Gerenciador de podcasts

### Descrição

        Um app ao estilo netflix onde posso separar os podcasts em categorias

### Domínio

        Podcasts feitos em videos

### Features

        - Listar os episodios do podcasts em sessões de categorias:
            -[saude, fitness, mentalidade, humor]

        - Filtrar episodios por nome de podcasts

## Como fazer?

#### Features:

    - Listar os episodios do podcasts em sessões de categorias

#### Como vou implementar:

      GET:  Vou retornar em uma api rest o nome do podcasts, a capa do podcasts, o nome do episodio e o link do podcasts, categoria.

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover:
      "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg?",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["helth", "bodybuilds"],
  },
];
```


#### Features:

    - Filtrar episodios por nome de podcasts


#### Como vou implementar:

      GET: Retorna lista de episódios baseado em um parametro enviado pelo o cliente do nome do podcasts


