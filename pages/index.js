import database from "../../../../infra/database.js";

function status(request, response) {
  response.status(200).json({ chave: "São acima da média" });
}

export default status;
