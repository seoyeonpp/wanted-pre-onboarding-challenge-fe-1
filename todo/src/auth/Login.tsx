import { useState } from 'react';

function Login() {
    // id,pw, 버튼 비활성화
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    // 유효성 검사
    const [errorId, setErrorId] = useState<boolean>(false);
    const [errorPw, setErrorPw] = useState<boolean>(false);
    let msg = "";

    // id input change 이벤트
    const onChangeId = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setId(value);
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        regEx.test(value) ? setErrorId(false) : setErrorId(true);

        errorId === false && errorPw === false ? setIsDisabled(false) : setIsDisabled(true);
    };
    // pw input change 이벤트
    const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setPw(value);
        if (pw.length > 7) {
            setErrorPw(false);
        } else { setErrorPw(true) }

        errorId === false && errorPw === false ? setIsDisabled(false) : setIsDisabled(true);
    };


    // 로그인 시
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('id 에러' + errorId)
        console.log('pw 에러' + errorPw)
        test();
    };
    async function test() {
        const data = {
            "email": id,
            "password": pw
        }
        let res = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        let resJson = await res.json();
        try {
            console.log("resJson :: ", resJson);
            msg = resJson.details;
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>로그인하세요</h1>
            <form onSubmit={onSubmit}>
                <input value={id} onChange={onChangeId} type="text" placeholder="이메일" />
                <input value={pw} onChange={onChangePw} type="password" placeholder="비밀번호" />
                <button disabled={isDisabled}>제출</button>
            </form>
            {msg !== '' ? msg : null}
        </div>
    );
}

export default Login;