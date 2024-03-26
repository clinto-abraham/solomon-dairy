// https://mui.com/material-ui/react-stepper/
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';

import WordOfGodSearch from "../../components/SearchBars/wordOfGodSearch";
import PropTypes from 'prop-types';
import { useState } from 'react';

const steps = [
  {
    label: 'Torah',
    description: `Torah was composed by using four different sources—Yahwist, Elohist, Priestly and Deuteronomist—that were combined into one in the Persian period.
    It was likely completed during the Persian period (539-333 BCE)`,
  },
  {
    label: 'Codex Sinaiticus',
    description: `Also called Sinai Bible, is a fourth-century Christian manuscript of a Greek Bible, containing the majority of the Greek Old Testament.
    It is written in uncial letters on parchment.
    Along with Codex Alexandrinus and Codex Vaticanus, it is one of the earliest and most complete manuscripts of the Bible, and contains the oldest complete copy of the New Testament.
    It has been dated to the mid-fourth century.(350AD -Anno Domini (In the year of our king or lord))`,
  },
  {
    label: 'Leningrad Codex',
    description:
      'Dated 1008 CE, written in Cairo, now deposited at Russian National Library in Saint Petersburg; this manuscript is the basis of the Biblia Hebraica Stuttgartensia',
  },

];

export default function History() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 20 }}>

      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              // StepIconComponent={GroupAddIcon}
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button

                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Congrats, you have gone too far. What could be next step? Are you ready to find out more truth?</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            See Evidence
          </Button>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Read Again
          </Button>
        </Paper>
      )}
      <Box sx={{ maxWidth: 400, padding: 20 }}>
        <section id="hero">
          <WordOfGodSearch />
        </section>
      </Box>

    </Box>
  );
}


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

// {SummaryText.map(summary =>
// (<div key={summary.title} className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">

// <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
//   <h1 className="text-2xl font-bold text-center lg:text-2xl lg:max-w-md lg:text-left">
//     {summary.title}
//   </h1>
//   <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
//     {summary.description}
//   </p>
// </div>

// <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
//   <img src={summary.image} alt="Image" />
//   {summary.verses ? <VerseTable verses={summary.verses} /> : null}
// </div>
// </div>))}