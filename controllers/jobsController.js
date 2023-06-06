const createJob = async (req,res)=>{
   res.send("Job created")
}

const getAllJobs =async (req, res) => {
  res.send("displaying all jobs");
};

const showStats = async (req, res) => {
  res.send("displaying stats");
};

const deleteJob = async (req, res) => {
  res.send("Job deleted");
};

const updateJob = async (req, res) => {
  res.send("Job updated");
};

export {createJob,getAllJobs,showStats,deleteJob,updateJob}