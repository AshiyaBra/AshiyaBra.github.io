class Toys {
    constructor(name, price, ageRange, rating, imageFile) {
      this.name = name;
      this.price = price;
      this.ageRange = ageRange;
      this.rating = rating;
      this.imageFile = imageFile;
    }
  
    get details() {
      return `${this.name}\n$${this.price}\n${this.ageRange}\n${this.rating}`;
    }
  
    get ToyItem() {
      const section = document.createElement("section");
      section.classList.add("toys");
  
      const h2 = document.createElement("h2");
      h2.innerHTML = this.name;
      section.append(h2);
  
      const ul = document.createElement("ul");
      section.append(ul);
      ul.append(this.toyItemlist("Price: " + this.price));
      ul.append(this.toyItemlist("Age Range: " + this.ageRange));
      ul.append(this.toyItemlist("Rating: " + this.rating));
  
      const image = this.images(this.imageFile);
      section.append(image);
  
      return section;
    }
  
    images(info) {
      const image = document.createElement("img");
      image.src = "images/" + info;
      return image;
    }
  
    toyItemlist(info) {
      const li = document.createElement("li");
      li.textContent = info;
      return li;
    }
  }
  
  const Toy = () => {
    const toyList = document.getElementById("toys-list");
    const toys = [];
    toys.push(new Toys("Care Bear", "$10.99", "2+", "4.8 stars", "care.jpg"));
    toys.push(new Toys("Baby Alive", "$34.99", "2+", "4 stars", "baby.jpg"));
    toys.push(new Toys("Hello Kitty", "$11.99", "4+", "5 stars", "hello.jpg"));
    toys.push(new Toys("Little Miss", "$3.99", "5+", "4.5 stars", "little.jpg"));
    toys.push(new Toys("Truck", "$5.99", "5+", "4.2 stars", "truck.jpg"));
    toys.push(new Toys("Yo-Yo", "$2.99", "10+", "3.4 stars", "yoyo.jpg"));
  
    toys.forEach((toy) => {
      toyList.append(toy.ToyItem);
    });
  };
  
window.onload = () => {
    Toy();
}
  