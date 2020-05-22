const profile = {
  name: "Jithu",
  age: 32,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring a property and annotating the type
const { age }: { age: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
