const PUSHBULLET_ACCESS_TOKEN = "o.BGEf6U47P8PzhtW480qYoiTQkOJrVEoF"; // Pushbullet 액세스 토큰
const DEVICE_IDEN = "ujyXwqh2neusjxNbxGwftI"; // 문자 전송에 사용할 디바이스 ID

/**
 * 전화번호 입력 필드 포맷팅
 * @param {HTMLInputElement} input - 전화번호 입력 요소
 */
function formatPhoneNumber(input) {
    let phoneNumber = onlyNumber(input.value);
    
    // 11자리 제한
    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.slice(0, 11);
    }
    
    input.value = phoneNumber;
}

/**
 * 전화번호 붙여넣기 처리
 * @param {ClipboardEvent} event - 붙여넣기 이벤트
 */
function handlePhonePaste(event) {
    event.preventDefault();
    const pastedText = (event.clipboardData || window.clipboardData).getData('text');
    const input = event.target;
    
    input.value = onlyNumber(pastedText).slice(0, 11);
}

/**
 * SMS 전송 함수
 */
async function sendSMS() {
    // 1. 디바이스 상태 확인
    const isDeviceReady = await checkDeviceStatus();
    if (!isDeviceReady) {
        alert("SMS 전송이 가능한 디바이스가 준비되지 않았습니다.");
        return;
    }

    const phoneInput = document.getElementById("phoneNumber");
    const messageText = document.getElementById("templeteTxt").value;

    // 2. 입력값 검증
    if (!phoneInput.value || !messageText || messageText === "-") {
        alert("전화번호와 메시지를 모두 입력해주세요.");
        return;
    }

    const phoneNumber = phoneInput.value;

    // 3. 전화번호 유효성 검사
    if (!isValidPhoneNumber(phoneNumber)) {
        return;
    }

    // 4. SMS 전송 요청
    try {
        const response = await fetch("https://api.pushbullet.com/v2/texts", {
            method: "POST",
            headers: {
                "Access-Token": PUSHBULLET_ACCESS_TOKEN,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    addresses: [phoneNumber],
                    message: messageText,
                    target_device_iden: DEVICE_IDEN,
                },
            }),
        });

        if (!response.ok) {
            throw new Error("메시지 전송에 실패했습니다.");
        }

        alert("메시지가 성공적으로 전송되었습니다.");

    } catch (error) {
        console.error("SMS 전송 오류:", error);
        alert("메시지 전송에 실패했습니다. 다시 시도해주세요.");
    }
}

/**
 * 전화번호 유효성 검사
 * @param {string} phoneNumber - 검사할 전화번호
 * @returns {boolean} 유효성 여부
 */
function isValidPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        alert("올바른 전화번호 형식이 아닙니다. (10-11자리 숫자)");
        return false;
    }

    if (!phoneNumber.startsWith('01')) {
        alert("휴대폰 번호는 01로 시작해야 합니다.");
        return false;
    }

    return true;
}

/**
 * 디바이스 상태 확인 함수
 * @returns {Promise<boolean>} 디바이스 사용 가능 여부
 */
async function checkDeviceStatus() {
    try {
        const response = await fetch("https://api.pushbullet.com/v2/devices", {
            headers: {
                "Access-Token": PUSHBULLET_ACCESS_TOKEN,
            },
        });

        if (!response.ok) {
            console.error("디바이스 상태 확인 실패");
            return false;
        }

        const data = await response.json();
        const device = data.devices.find(d => d.iden === DEVICE_IDEN);

        if (!device) {
            console.error("설정된 디바이스를 찾을 수 없습니다.");
            return false;
        }

        if (!device.active) {
            console.error("디바이스가 비활성 상태입니다.");
            return false;
        }

        if (!device.has_sms) {
            console.error("SMS 기능이 비활성화되어 있습니다.");
            return false;
        }

        return true;
    } catch (error) {
        console.error("디바이스 상태 확인 중 오류 발생:", error);
        return false;
    }
}
