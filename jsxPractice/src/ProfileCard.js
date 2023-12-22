export default function ProfileCard({ title, handle, image }) {
  //   hacer variables seria una opcion
  //   const title = props.title;
  //   const handle = props.handle;
  // esta opcion equivale a que las variables son propiedades, finalmente podemos reducir este codigo si en vez de importar props importamos las varibales directamente
  //   const { title, handle } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="loguito" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
}
