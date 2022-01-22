import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            alt="notes"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
