const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");
fetch("js/jobs.json").then(res => res.json()).then(data => {
    const job = data.find(j => j.id == jobId);
    if (!job) {
        document.body.innerHTML = "<h1> Job not found</h1>";
        return;   
  }
  document.getElementById("cover").src=job.Cover
    document.getElementById("title").textContent = job.title;
    document.getElementById("company").textContent = job.company;
    document.getElementById("location").textContent = job.location;
    document.getElementById("time").textContent = job.time;
    document.getElementById("salary").textContent = job.salary;
    document.getElementById("type").textContent = job.type;
    document.getElementById("exp").textContent = job.exp;
    document.getElementById("description").textContent = job.description;
    document.getElementById("companyLocation").textContent = job.companyLocation;
    document.getElementById("employees").textContent = job.employees;

const tagsContainer = document.getElementById("tags");
    job.tags.forEach(tag => {
      let li = document.createElement("li");
     
      li.textContent = tag;
      tagsContainer.appendChild(li);
    });

    const reqList = document.getElementById("required");
    job.required.forEach(req => {
      let li = document.createElement("li");
      li.textContent = req;
      reqList.appendChild(li);
    });

    const benList = document.getElementById("benefit");
    job.benefit.forEach(b => {
      let li = document.createElement("li");
      li.textContent = b;
      benList.appendChild(li);
    });

    const gallery = document.getElementById("gallery");
    job.gallery.forEach(img => {
      let div = document.createElement("div");
      div.className = "ph";

      let image = document.createElement("img");
      image.src = img;

      div.appendChild(image);
      gallery.appendChild(div);
    });




})