// Profile component
function Profile(props) {
  const { name, imageSrc, altText, width, height, profession, awards, discovered } = props;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          {awards.map((award, index) => (
            <span key={index}>{award}{index < awards.length - 1 ? ', ' : ''}</span>
          ))}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

// Gallery component
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageSrc="https://i.imgur.com/szV5sdGs.jpg"
        altText="Maria Skłodowska-Curie"
        width={70}
        height={70}
        profession="physicist and chemist"
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovered="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageSrc="https://i.imgur.com/YfeOqp2s.jpg"
        altText="Katsuko Saruhashi"
        width={70}
        height={70}
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}