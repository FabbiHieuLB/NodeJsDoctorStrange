import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import docterController from "../controller/doctorController";

let router = express.Router();

let initWebroutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);
  router.get("/api/top-doctor-home", docterController.getTopDoctorHome);
  router.get("/api/get-all-doctors", docterController.getAllDoctors);
  router.post("/api/save-infor-doctors", docterController.postInforDoctor);
  router.get(
    "/api/get-detail-doctor-by-id",
    docterController.getDetailDoctorById
  );
  router.post("/api/bulk-create-schedule", docterController.bulkCreateSchedule);
  router.get(
    "/api/get-schedule-doctor-by-date",
    docterController.getScheduleByDate
  );

  router.get(
    "/api/get-extra-infor-doctor-by-id",
    docterController.getExtraInforDoctorById
  );
  router.get(
    "/api/get-profile-doctor-by-id",
    docterController.getProfileDoctorById
  );

  return app.use("/", router);
};

module.exports = initWebroutes;
