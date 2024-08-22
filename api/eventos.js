export default function handler(req, res) {
    res.status(200).json({
      eventos: [
        {
          descricao: "Estudar React",
          inicio: "2022-01-15T09:00",
          fim: "2022-01-15T13:00",
          completo: false,
          id: 101
        },
        {
          descricao: "Estudar TypeScript",
          inicio: "2022-01-14T09:00",
          fim: "2022-01-14T13:00",
          completo: false,
          id: 102
        }
      ]
    });
  }
  
