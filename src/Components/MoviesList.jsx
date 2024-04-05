import CardMovie from "./CardMovie";
import PaginationCom from "./Pagination";

const MoviesList = ({ movies, getCurrentPage, pageCount }) => {
  return (
    <div className="flex justify-center my-[60px] flex-wrap">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h1>Mohammed No Movies</h1>
      )}
      {movies.length >= 1 ? (
        <div className="my-[40px]">
          <PaginationCom getCurrentPage={getCurrentPage} pageCount={pageCount} />
        </div>
      ) : null}
    </div>
  );
};

export default MoviesList;
