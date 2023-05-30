import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [date, setDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: "啟用",
      idNum: "",
      name: "",
      email: "",
      phone: "",
      birthday: new Date(),
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (submitData) => {
    console.log(submitData);
    alert("存檔成功！");
  };

  return (
    <div className="container">
      <h1 className="text-center mb-3">User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <label htmlFor="status" className="col-sm-2 col-form-label">
            <span className="text-danger">*</span>狀態
          </label>
          <div className="col-sm-10">
            <select
              className="form-select"
              aria-label="Default select example"
              id="status"
              name="status"
              {...register("status", { required: "Required" })}
            >
              <option value="啟用">啟用</option>
              <option value="停用">停用</option>
            </select>
            {errors.status && (
              <p className="text-danger">{errors.status.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="idNum" className="col-sm-2 col-form-label">
            <span className="text-danger">*</span>客戶編號
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="idNum"
              name="idNum"
              {...register("idNum", {
                required: "必填",
                maxLength: {
                  value: 10,
                  message: "需小於或等於 10 字",
                },
                pattern: {
                  value: /[a-zA-Z0-9]/i,
                  message: "需為英數字",
                },
              })}
            />
            {errors.idNum && (
              <p className="text-danger">{errors.idNum.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            <span className="text-danger">*</span>客戶姓名
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              {...register("name", {
                required: "必填",
                maxLength: {
                  value: 20,
                  message: "需小於或等於 20 字",
                },
              })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            <span className="text-danger">*</span>Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              {...register("email", {
                required: "必填",
                maxLength: {
                  value: 40,
                  message: "密碼需小於或等於 40 字",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email 不符合格式",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            行動電話
          </label>
          <div className="col-sm-10">
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="09XX-XXXXXX"
              {...register("phone", {
                maxLength: {
                  value: 20,
                  message: "最多 20 字",
                },
                pattern: {
                  value: /^09\d{2}-\d{3}-?\d{3}$/,
                  message: "手機號碼不符合格式",
                },
              })}
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="birthday" className="col-sm-2 col-form-label">
            出生年月日
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              {...register("birthday")}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            <span className="text-danger">*</span>密碼
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              {...register("password", {
                required: "必填",
                minLength: {
                  value: 4,
                  message: "密碼需大於或等於 4 字",
                },
                maxLength: {
                  value: 20,
                  message: "密碼需小於或等於 20 字",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            <span className="text-danger">*</span>密碼確認
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              name="passwordConfirm"
              {...register("passwordConfirm", {
                required: "必填",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "密碼不一致";
                  }
                },
              })}
            />
            {errors.passwordConfirm && (
              <p className="text-danger">{errors.passwordConfirm.message}</p>
            )}
          </div>
        </div>
        <div className="d-flex mt-5">
          <button type="submit" className="btn btn-primary ms-auto mx-3">
            Submit
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
