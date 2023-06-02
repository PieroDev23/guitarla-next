export function generateUniqueId() {
  const timestamp = new Date().getTime(); // Obtiene el timestamp actual
  const random = Math.random() * 10000; // Genera un número aleatorio entre 0 y 10000
  const uniqueId = `${timestamp}-${random}`; // Combina el timestamp y el número aleatorio

  return uniqueId;
}

export function formatDate(date) {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("es-ES", options);
}
