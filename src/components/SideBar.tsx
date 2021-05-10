import { useEffect, useState } from 'react'

import { Button } from './Button';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import '../styles/global.scss';



// interface GenreResponseProps {
//   id: number;
//   name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
//   title: string;
// }

//recebendo child props do app
type ChildProps = {
  //https://www.typescriptlang.org/docs/handbook/basic-types.html array type
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>,
  selectedGenreId: number;
  setSelectedGenreId : ((id: number) => number)

}
export function SideBar({genres,setSelectedGenreId,selectedGenreId}:ChildProps) {
    // const [selectedGenreId, setSelectedGenreId] = useState(1);

    // const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    // const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    // useEffect(() => {
    //   api.get<GenreResponseProps[]>('genres').then(response => {
    //     setGenres(response.data);
    //   });
    // }, []);

    // useEffect(() => {
      
  
    //   api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
    //     setSelectedGenre(response.data);
    //   })
    // }, [selectedGenreId]);
  

    function handleClickButton(id: number) {
      setSelectedGenreId(id);
    }

    return(
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>

      {/* <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
      </div> */}
    </div>
    )

}