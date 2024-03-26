import WordOfGodSearch from "../../components/SearchBars/wordOfGodSearch";
import { SummaryText } from "../../components/Summary";
import PropTypes from 'prop-types';

const VerseTable = (props) => {
  const { verses } = props;
  const reference = Object.keys(verses)
  const text = Object.values(verses)
  return (
    <table >
      <tbody>
      <tr className="text-1xl text-center text-gray-400 lg:max-w-md lg:text-left">
        {reference.map(refer => <td key={refer}> {refer}</td>)}
      </tr>
      <tr className="text-1xl text-center text-gray-400 lg:max-w-md lg:text-left">
        {text.map(txt => <td key={txt}> {txt}</td>)}
      </tr>
      </tbody>
    </table>
  )

}
VerseTable.propTypes = {
  verses: PropTypes.object.isRequired,
};


export default function Summary() {
  return (
    <>
      <section id="hero">
        {SummaryText.map(summary =>
        (<div key={summary.title} className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">

          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-2xl font-bold text-center lg:text-2xl lg:max-w-md lg:text-left">
              {summary.title}
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              {summary.description}
            </p>
          </div>

          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src={summary.image} alt="Image" />
            {summary.verses ? <VerseTable verses={summary.verses} /> : null}
          </div>
        </div>))}

      </section>
      <WordOfGodSearch />
    </>
  );
}
