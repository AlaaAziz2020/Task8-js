var contactForm = document.getElementById("contactForm");
var profileImage = document.getElementById("profileImage");
var fullName = document.getElementById("fullName");
var phoneNumber = document.getElementById("phoneNumber");
var emailAddress = document.getElementById("emailAddress");
var addressInput = document.getElementById("addressInput");
var groupSelect = document.getElementById("groupSelect");
var notesInput = document.getElementById("notesInput");
var favoriteContainer = document.getElementById("favoriteContainer");
var emergencyBox = document.getElementById("emergencyBox");
var favoriteCheck = document.getElementById("favoriteCheck");
var emergencyCheck = document.getElementById("emergencyCheck");
var contactsContainer = document.getElementById("contactsContainer");
  var noFavorites = document.getElementById("noFavorites");
    var noEmergency = document.getElementById("noEmergency");
    var favoriteCount = document.getElementById("favoriteCount");
    var emergencyCount = document.getElementById("emergencyCount");
    var totalCount= document.getElementById("totalCount");
    var saveBtn =document.getElementById("saveBtn");
var updateBtn = document.getElementById("updateBtn");
var noContacts=document.getElementById("noContacts");
var searchContact=document.getElementById("searchContact");
var nameRegexError=document.getElementById("nameRegexError");
var nameRequiredError=document.getElementById("nameRequiredError");

var phoneRegexError =document.getElementById("phoneRegexError");
var phoneRequiredError =document.getElementById("phoneRequiredError");
var emailRegexError =document.getElementById("emailRegexError");
var emailRequiredError =document.getElementById("emailRequiredError");




//function to addContact //
var contactList;
//condition on local storage
if(localStorage.getItem("contactList")){
  contactList = JSON.parse(localStorage.getItem("contactList"))
  displayContact(contactList);
}else{
contactList=[];

  }
// funtion to add contact
function addContact() {
  // regex condition
  if(validateContactName() && validatePhoneNumber() && validateEmailAddress()){
  var contact = {
    full_name: fullName.value,
    phone_number: phoneNumber.value,
    email_address: emailAddress.value,
    address_input: addressInput.value,
    group_select: groupSelect.value,
    notes_input: notesInput.value,
    favorite_check: favoriteCheck.checked,
    emergency_check: emergencyCheck.checked,
  };

  contactList.push(contact);
  saveToLocalStorage(contactList);
  displayContact(contactList);
  displayFavorite(contactList);
  displayEmergency(contactList);
  updateCounts(contactList);
  clearForm();
  var modalEl = document.getElementById("addContactModal");
  var modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.hide();
  Swal.fire({
  icon: "success",
  title: "Added",
  text: "Contact added successfully!"
});
}else{
console.log('validation error')
}
  
}

//function display
function displayContact(cList){
  var box ="";
   if (cList.length === 0) {
    noContacts.style.display = "block";
    contactsContainer.innerHTML = "";
    return;
  } else {
    noContacts.style.display = "none";
  }

  for (var i = 0; i < cList.length; i++){
 
 box += `
  <div class="contact-card">

    <!-- TOP -->
    <div class="card-top">

      <div class="avatar-box">
        <div class="avatar-letter">
          ${cList[i].full_name.charAt(0).toUpperCase()}
        </div>

        ${cList[i].favorite_check ? `
          <span class="badge fav-badge">
            <i class="fa-solid fa-star"></i>
          </span>` : ""}

        ${cList[i].emergency_check ? `
          <span class="badge emergency-badge">
            <i class="fa-solid fa-heart-pulse"></i>
          </span>` : ""}
      </div>

      <div class="top-right">
        <h4 class="contact-name">${cList[i].full_name}</h4>

        <div class="info-row">
          <i class="fa-solid fa-phone"></i>
          <span class="phonenumber">${cList[i].phone_number}</span>
        </div>
      </div>

    </div>

    <div class="card-middle pt-2">

      <div class="info-row">
        <i class="fa-solid fa-envelope envelope"></i>
        <span class="mail-text">${cList[i].email_address}</span>
      </div>

      <div class="info-row">
        <i class="fa-solid fa-location-dot location"></i>
        <span class="location-text">${cList[i].address_input}</span>
      </div>

      <div class="tags">
        <span class="tag">${cList[i].group_select}</span>

        ${cList[i].emergency_check ? `
          <span class="tag emergency-tag">
            <i class="fa-solid fa-heart-pulse"></i> Emergency
          </span>` : ""}
      </div>

    </div>

    <!-- ACTIONS -->
    <div class="card-actions">

      <div class="left-actions">
        <a href="tel:${cList[i].phone_number}" class="action-btn call">
          <i class="fa-solid fa-phone"></i>
        </a>

        <a href="mailto:${cList[i].email_address}" class="action-btn mail">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>

      <div class="right-actions">
<button class="icon-btn star" onclick="toggleFavorite(${i})">
        <i class="fa-solid fa-star"></i></button>
<button class="icon-btn heart" onclick="toggleEmergency(${i})">
        <i class="fa-solid fa-heart-pulse"  ></i>
        </button>
        <button class="icon-btn edit" onclick="editContact(${i})">
        <i class="fa-solid fa-pen edit"></i>
        </button>
        <button class="icon-btn delete" onclick="deleteContact(${i})">
          <i class="fa-solid fa-trash delete"></i>
        </button>
      </div>

    </div>

  </div>
`;


        }

contactsContainer.innerHTML = box;
}
// function to clear 
function clearForm(){
    fullName.value="";
   phoneNumber.value="";
   emailAddress.value="";
    addressInput.value="";
    groupSelect.value="";
    notesInput.value="";
    favoriteCheck.checked=false;
    emergencyCheck.checked=false;

}
// function delete
function deleteContact(index){
  Swal.fire({
    title: "Delete Contact?",
    text: `Are you sure you want to delete ${contactList[index].full_name}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6c757d",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel"
  }).then((result) => {
    if (result.isConfirmed) {
      contactList.splice(index, 1);

      saveToLocalStorage(contactList);
      displayContact(contactList);
      displayFavorite(contactList);
      displayEmergency(contactList);
      updateCounts(contactList);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Contact deleted successfully."
      });
    }
  });
}

//function to save to local storage
function saveToLocalStorage(cList){
  localStorage.setItem("contactList", JSON.stringify(cList));
}

//function display favorite 
function displayFavorite(cList) {
  var favBox = "";
  var hasFavorites = false;

  for (var i = 0; i < cList.length; i++) {
    if (cList[i].favorite_check === true) {
      hasFavorites = true;

      favBox += `
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center gap-3">
            <div class="avatar-letter small-avatar">
              ${cList[i].full_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div class="fw-bold">${cList[i].full_name}</div>
              <div class="text-muted" style="font-size:14px">
                ${cList[i].phone_number}
              </div>
            </div>
          </div>
          <a href="tel:${cList[i].phone_number}" class="call-btn">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      `;
    }
  }

  favoriteContainer.innerHTML = favBox;

  if (hasFavorites) {
    noFavorites.style.display = "none";
  } else {
    noFavorites.style.display = "block";
  }
}
//function display emergency 
function displayEmergency(cList) {
  var emergBox = "";
  var hasEmergency = false;

  for (var i = 0; i < cList.length; i++) {
    if (cList[i].emergency_check === true) {
      hasEmergency = true;

      emergBox += `
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center gap-3">
            <div class="avatar-letter small-avatar">
              ${cList[i].full_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div class="fw-bold">${cList[i].full_name}</div>
              <div class="text-muted" style="font-size:14px">
                ${cList[i].phone_number}
              </div>
            </div>
          </div>
          <a href="tel:${cList[i].phone_number}" class="call-btn">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      `;
    }
  }

  emergencyBox.innerHTML = emergBox;

  if (hasEmergency) {
    noEmergency.style.display = "none";
  } else {
   noEmergency.style.display = "block";
  }
}
// function totalcount
function updateCounts(cList) {
  var total = cList.length;
  var favorites = 0;
  var emergency = 0;

  for (var i = 0; i < cList.length; i++) {
    if (cList[i].favorite_check === true) {
      favorites++;
    }
    if (cList[i].emergency_check === true) {
      emergency++;
    }
  }

  totalCount.innerText = total;
  favoriteCount.innerText = favorites;
  emergencyCount.innerText = emergency;
}
// function set form to update contact
function setFormToUpdate(index){
  console.log("test",index);
  // console.log(contactList[index],index)
   fullName.value=contactList[index].full_name;
  phoneNumber.value=contactList[index].phone_number;
 emailAddress.value=contactList[index].email_address;
 addressInput.value=contactList[index].address_input;
  groupSelect.value=contactList[index].group_select;
  notesInput.value=contactList[index].notes_input;
 favoriteCheck.checked=contactList[index].favorite_check;
 emergencyCheck.checked=contactList[index].emergency_check;
  
 saveBtn.classList.add("d-none");
updateBtn.classList.remove("d-none");
// custome attribute
  updateBtn.setAttribute("data-index",index);

}

// function update contact 
function updateContact() {
  var index = updateBtn.getAttribute("data-index");

  contactList[index].full_name = fullName.value;
  contactList[index].phone_number = phoneNumber.value;
  contactList[index].email_address = emailAddress.value;
  contactList[index].address_input = addressInput.value;
  contactList[index].group_select = groupSelect.value;
  contactList[index].notes_input = notesInput.value;
  contactList[index].favorite_check = favoriteCheck.checked;
  contactList[index].emergency_check = emergencyCheck.checked;

  saveToLocalStorage(contactList);
  displayContact(contactList);
  displayFavorite(contactList);
  displayEmergency(contactList);
  updateCounts(contactList);
  saveBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");

  bootstrap.Modal.getInstance(
    document.getElementById("addContactModal")
  ).hide();
}
//function edit
function editContact(index) {
  fullName.value = contactList[index].full_name;
  phoneNumber.value = contactList[index].phone_number;
  emailAddress.value = contactList[index].email_address;
  addressInput.value = contactList[index].address_input;
  groupSelect.value = contactList[index].group_select;
  notesInput.value = contactList[index].notes_input;
  favoriteCheck.checked = contactList[index].favorite_check;
  emergencyCheck.checked = contactList[index].emergency_check;

  updateBtn.setAttribute("data-index", index);

  saveBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");

  bootstrap.Modal.getOrCreateInstance(
    document.getElementById("addContactModal")
  ).show();
}
// function to search on contacts
function searchOnContacts(){
  console.log(searchContact.value);
  var searchValue =searchContact.value.toLowerCase();
  var searchList=[]
  for(var i=0;i< contactList.length;i++){
    if(contactList[i].full_name.toLowerCase().includes(searchValue)||contactList[i].phone_number.toLowerCase().includes(searchValue)
      ||contactList[i].email_address.toLowerCase().includes(searchValue)){
      searchList.push(contactList[i]);
    } else {
          //  console.log("not match");
    }
    
  }
        displayContact(searchList)

}
// function fullName regex
function validateContactName(){
    if (fullName.value === "") {
    Swal.fire({
      icon: "error",
      title: "Missing Name",
      text: "Please enter a name for the contact!",
      confirmButtonText: "OK"
    });
    return false;
  }
var regex = /^[a-zA-Z ]{2,50}$/;
  if(regex.test(fullName.value)){
    console.log("match");
    nameRegexError.classList.replace("d-block","d-none");
    fullName.classList.add("is-valid")
        fullName.classList.remove("is-invalid");
        nameRequiredError.classList.replace("d-block","d-none");

    return true;
  } else {
    console.log("not match");
        nameRegexError.classList.replace("d-none","d-block");
    fullName.classList.add("is-invalid")
        fullName.classList.remove("is-valid")
        nameRequiredError.classList.replace("d-block","d-none")
    return false;
  }
}
// function fullName required
function validateNameRequiredError(){
  
  if(fullName.value===""){
    
    console.log("match");
        nameRequiredError.classList.replace("d-none","d-block");
                nameRegexError.classList.replace("d-block","d-none")

    return false;
  } else {
            nameRequiredError.classList.replace("d-block","d-none")

        nameRegexError.classList.replace("d-none","d-block");

    return false;
  }
}
// function phone number 
function validatePhoneNumber() {
  if (phoneNumber.value === "") {
    Swal.fire({
      icon: "error",
      title: "Missing Phone",
      text: "Please enter a phone number!",
      confirmButtonText: "OK"
    });
    return false;
  }
  var regex = /^01[0-9]{9}$/;

  if(regex.test(phoneNumber.value)){
    console.log("match");
    phoneRegexError.classList.replace("d-block","d-none");
    phoneNumber.classList.add("is-valid")
        phoneNumber.classList.remove("is-invalid");
        phoneRequiredError.classList.replace("d-block","d-none");

    return true;
  } else {
    console.log("not match");
        phoneRegexError.classList.replace("d-none","d-block");
    phoneNumber.classList.add("is-invalid")
        phoneNumber.classList.remove("is-valid")
        phoneRequiredError.classList.replace("d-block","d-none")
    return false;
  }
}
// function validate Email Address
function validateEmailAddress(){
    if (emailAddress.value === "") {
    Swal.fire({
      icon: "error",
      title: "Missing Email Address",
      text: "Please enter a email address!",
      confirmButtonText: "OK"
    });
    return false;
  }
  var regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
  if(regex.test(emailAddress.value)){
    console.log("match");
    emailRegexError.classList.replace("d-block","d-none");
    emailAddress.classList.add("is-valid")
        emailAddress.classList.remove("is-invalid");
        emailRequiredError.classList.replace("d-block","d-none");

    return true;
  } else {
    console.log("not match");
        emailRegexError.classList.replace("d-none","d-block");
    emailAddress.classList.add("is-invalid")
        emailAddress.classList.remove("is-valid")
        emailRequiredError.classList.replace("d-block","d-none")
    return false;
}
}
// function toggleFavorites
function toggleFavorite(index) {
  if (contactList[index].favorite_check === true) {
    contactList[index].favorite_check = false;
  } else {
    contactList[index].favorite_check = true;
  }

  saveToLocalStorage(contactList);
  displayContact(contactList);
  displayFavorite(contactList);
  updateCounts(contactList);
}
// function toggleEmergency
function toggleEmergency(index) {
  if (contactList[index].emergency_check === true) {
    contactList[index].emergency_check = false;
  } else {
    contactList[index].emergency_check = true;
  }

  saveToLocalStorage(contactList);
  displayContact(contactList);
  displayFavorite(contactList);
  displayEmergency(contactList);
  updateCounts(contactList);
}


