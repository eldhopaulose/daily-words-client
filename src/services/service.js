class TutorialDataService {
    getAll() {
      return http.get("/");
    }
    create(data) {
        return http.post("/word", data);
      }
  }
  
  export default new TutorialDataService();