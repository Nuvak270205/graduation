const GUESTS = [
    { id: "family", name: "Gia đình", sign: "Family", isFamily: true },
    { id: "nguyen-anh-thu", name: "Nguyễn Anh Thư", isFamily: false },
    { id: "anh-nguyen", name: "Ánh Nguyên", isFamily: false },
    { id: "thanh-ngan", name: "Thanh Ngân", isFamily: false },
    { id: "thanh-tran", name: "Thanh Trân", isFamily: false },
    { id: "hoang-khuong", name: "Hoàng Khương", isFamily: false },
    { id: "to-nhu", name: "Tố Như", isFamily: false },
    { id: "long-nhi", name: "Long Nhi", isFamily: false },
    { id: "kim-huong", name: "Kim Hương", isFamily: false },
    { id: "thuy-kieu", name: "Thúy Kiều", isFamily: false },
    { id: "nhu-y", name: "Như Ý", isFamily: false },
    { id: "son-phi", name: "Sơn Phi", isFamily: false },
    { id: "tan-tai", name: "Tấn Tài", isFamily: false },
    { id: "anh-thu", name: "Anh Thư", isFamily: false },
    { id: "hien-le", name: "Hiến Lê", isFamily: false },
    { id: "phuc-uyen", name: "Phúc & Uyên", isFamily: false },
    { id: "chien", name: "Chiến", title: "Anh", isFamily: false },
    { id: "khanh-duy", name: "Khánh Duy", title: "", isFamily: false },
    { id: "thanh-duy", name: "Khánh Duy", title: "", isFamily: false }
];

const searchParams = new URLSearchParams(window.location.search);
const guestId = searchParams.has("id")
    ? searchParams.get("id")
    : window.location.pathname.replace(/^\/|\/$/g, "");
const guest = GUESTS.find((entry) => entry.id === guestId);
const salutationElement = document.getElementById("guest-salutation");
const guestNameElement = document.getElementById("guest-name");
const guestSignatureElement = document.getElementById("guest-signature");
const invitationMessageElement = document.getElementById("invitation-message");
const messageHeadingElement = document.getElementById("message-heading");

if (guest?.isFamily) {
    salutationElement.textContent = "THÂN MỜI";
    guestNameElement.textContent = guest.name;
    guestSignatureElement.textContent = guest.sign;
    messageHeadingElement.textContent = " LỜI MỜI TRÂN TRỌNG ";
    invitationMessageElement.textContent =
        "Sự hiện diện của Gia đình trong ngày tốt nghiệp là niềm vui và món quà quý giá nhất, giúp ngày trọng đại của con thêm trọn vẹn. Con kính mời Gia đình cùng đến chung vui và chứng kiến cột mốc ý nghĩa này.";
} else if (guest) {
    salutationElement.textContent = "THÂN MỜI";
    guestNameElement.textContent = guest.title === undefined ? "Bạn" : guest.title;
    guestSignatureElement.textContent = guest.name;
} else {
    salutationElement.textContent = "THÂN MỜI";
    guestNameElement.textContent = "Bạn";
    guestSignatureElement.textContent = "Bạn thân mến";
}
