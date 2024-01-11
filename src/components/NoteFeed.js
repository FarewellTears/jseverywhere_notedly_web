import styled from "styled-components";
import { Link } from "react-router-dom";

import Node from "./Note";

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const NoteFeed = ({ notes }) => (
  <div>
    {notes.map((note) => (
      <NoteWrapper key={note.id}>
        <Node note={note} />
        <Link to={`/note/${note.id}`}>Show</Link>
      </NoteWrapper>
    ))}
  </div>
);

export default NoteFeed;
