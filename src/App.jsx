import { useState } from 'react';
import './App.css';
import ProductList from './ProductList'; // Import the ProductList component

function App() {
  // 1️⃣ Create a state for products (array of objects with id, name, price, description)
  const [products, setProducts] = useState([
    // Example product objects (Replace or add more)
    { id: 1, name: "Carnyx", price: 227.99, description: "18 gauge bronze wind instrument first used by the Celts in the early iron age. This instrument has the widest range of all wind instruments, beholding a variable timbre that can go from soft and elegant to absolutely fear inducing." },
    { id: 2, name: "Lyre", price: 59.99, description: "Lyres find their origins as far back as 2700BCE around the Mediterranean Sea and Fertile Crescent. Carved from solid mahogany, great for backing epic poetry." },
    { id: 3, name: "Bodhrán", price: 169.99, description: "The bodhrán is a frame drum of Irish origin ranging from 25 to 65 cm in diameter, with most drums measuring 35 to 45 cm. The sides of the drum are 9 to 20 cm deep. A goatskin head is tacked to one side (synthetic heads or other animal skins are sometimes used). The other side is open-ended for one hand to be placed against the inside of the drum head to control the pitch and timbre."},
    { id: 4, name: "Balalaika", price: 299.99, description: "The balalaika is a Russian stringed musical instrument with a characteristic triangular wooden, hollow body and three strings. Two strings are usually tuned to the same note and the third string is a perfect fourth higher. The higher-pitched balalaikas are used to play melodies and chords. The instrument generally has a short sustain, necessitating rapid strumming or plucking when it is used to play melodies. Balalaikas are often used for Russian folk music and dancing."},
    { id: 5, name: "Talharpa", price: 345.67, description: "The talharpa is a traditional bowed lyre from Scandinavia and the Baltic States. It is similar in construction and playing technique to the more widespread jouhikko and the northern Norwegian and Swedish talharpa."}
  ]);

  return (
    <div className= "app-container">
      <h1>Products</h1>
      
      {/* pass the products array as a prop to productList */}
      <ProductList products={products} />
    </div>
  );
}

export default App;
