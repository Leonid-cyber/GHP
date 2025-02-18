function sliderWithOpenSlides() {
  const blockSlider = document.querySelector(
    ".car-sales-and-card__wrapper-pictures"
  );
  if (!blockSlider) {
    return;
  }
  const mainImageBlock = blockSlider.querySelector(
    ".car-sales-and-card__main-image"
  );
  const additionalImagesWrapperBlock = blockSlider.querySelector(
    ".car-sales-and-card__additional-images-wrapper"
  );

  blockSlider.addEventListener("mouseup", manage);

  createAttributesWithSerialNumbers(additionalImagesWrapperBlock);
  setMainImage(0);
  setAttributeSerialNumberOnArrow(0);

  function manage(event) {
    const manageAttribute = getManageAttribute(event);

    setMainImage(manageAttribute);
    setAttributeSerialNumberOnArrow(manageAttribute);
  }

  function createAttributesWithSerialNumbers(parentBlock) {
    const allAdditionalImages = parentBlock.querySelectorAll(
      ".car-sales-and-card__additional-image"
    );

    allAdditionalImages.forEach((blockImage, index) => {
      blockImage.setAttribute("data-serial-number", `${index}`);
    });
  }

  function setMainImage(serialNumber) {
    const blockImage = additionalImagesWrapperBlock.querySelector(
      `[data-serial-number="${serialNumber}"]`
    );

    if (!blockImage) {
      return console.log("no having this image!");
    }

    const sourceImage = blockImage.getAttribute("src");
    const altImage = blockImage.getAttribute("alt");

    mainImageBlock.setAttribute("src", sourceImage);
    mainImageBlock.setAttribute("alt", altImage);
  }

  function setAttributeSerialNumberOnArrow(serialNumber) {
    const arrowLeft = blockSlider.querySelector(
      ".car-sales-and-card__arrow-left"
    );
    const arrowRight = blockSlider.querySelector(
      ".car-sales-and-card__arrow-right"
    );
    const additionalImages = additionalImagesWrapperBlock.querySelectorAll(
      ".car-sales-and-card__additional-image"
    );
    const additionalImagesEndSerialNumber = additionalImages.length - 1;

    arrowLeft.setAttribute("data-serial-number", `${serialNumber - 1}`);
    arrowRight.setAttribute("data-serial-number", `${serialNumber + 1}`);

    if (serialNumber - 1 < 0) {
      arrowLeft.setAttribute(
        "data-serial-number",
        `${additionalImagesEndSerialNumber}`
      );
    }
    if (serialNumber + 1 > additionalImagesEndSerialNumber) {
      arrowRight.setAttribute("data-serial-number", `${0}`);
    }
  }

  function getManageAttribute(event) {
    const blockTargetArrowLeft = event.target.closest(
      ".car-sales-and-card__arrow-left"
    );
    if (blockTargetArrowLeft) {
      const serialNumberImage =
        blockTargetArrowLeft.getAttribute("data-serial-number");
      return Number(serialNumberImage);
    }

    const blockTargetArrowRight = event.target.closest(
      ".car-sales-and-card__arrow-right"
    );
    if (blockTargetArrowRight) {
      const serialNumberImage =
        blockTargetArrowRight.getAttribute("data-serial-number");
      return Number(serialNumberImage);
    }

    const blockTargetSerialNumber = event.target.closest(
      ".car-sales-and-card__additional-image"
    );
    if (blockTargetSerialNumber) {
      const serialNumberImage =
        blockTargetSerialNumber.getAttribute("data-serial-number");
      return Number(serialNumberImage);
    }
    return false;
  }
}
sliderWithOpenSlides();

function accordeon() {
  const blockParentAccordeon = document.querySelector(".faq__questions");

  if (!blockParentAccordeon) {
    return;
  }

  blockParentAccordeon.addEventListener("click", manageAccordeon);

  function manageAccordeon() {
    const blockWrapper = event.target.closest(".faq__question-wrapper");

    if (!blockWrapper) {
      return;
    }

    blockWrapper.classList.toggle("faq__question-wrapper--open");
    return;
  }
}
accordeon();
// export {accordeon}

function blockFiltering() {
  // hatchbacks;sedan;suv;minivans;hybrids;electric;
  // japan;china;korea;
  const cards = [
    // JAPAN
    {
      country: "japan",
      type: "hatchback",
      model: "Toyota Passo",
      characteristics: "Бензин | 1.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "1 040 000 руб",
      photo: "../../images/cards/__item/Toyota Passo.jpg",
      advantage: "Привезем в обход санкций!",
    },
    {
      country: "japan",
      type: "hatchback hybrids",
      model: "Honda Fit",
      characteristics: "Гибрид | 1.5л | передний",
      tag1: "2023",
      tag2: "6AA-GR3",
      price: "1 700 000 руб",
      photo: "../../images/cards/__item/fit.jpg",
    },
    {
      country: "japan",
      type: "hatchback",
      model: "Toyota Roomy",
      characteristics: "Бензин | 1.0л | передний",
      tag1: "2021",
      tag2: "M900A",
      price: "980 000 руб",
      photo: "../../images/cards/__item/roomy.jpg",
    },
    {
      country: "japan",
      type: "hatchback",
      model: "Toyota Sienta",
      characteristics: "Гибрид | 1.5л | передний",
      tag1: "2023",
      tag2: "MXPL10G",
      price: "1 920 000 руб",
      photo: "../../images/cards/__item/sienta.jpg",
    },
    {
      country: "japan",
      type: "hatchback hybrids",
      model: "Toyota Aqua",
      characteristics: "Гибрид | 1.5л | передний",
      tag1: "2022",
      tag2: "6AA-MXPK",
      price: "1 590 000 руб",
      photo: "../../images/cards/__item/aqua.jpg",
    },
    // CHINA
    {
      country: "china",
      type: "electric hatchback",
      model: "ORA Good Cat",
      characteristics: "Электро | 141 л.с. | передний",
      tag1: "2022",
      price: "2 400 000 руб",
      photo: "../../images/cards/__item/oragc.jpg",
    },
    {
      country: "china",
      type: "electric hatchback",
      model: "BYD Seagull",
      characteristics: "Электро | 74 л.с. | передний",
      tag1: "2022",
      price: "2 300 000 руб",
      photo: "../../images/cards/__item/byd-seagull.jpg",
    },
    {
      country: "china",
      type: "electric minivans",
      model: "Zeekr 009",
      characteristics: "Электро | 544 л.с. | полный",
      tag1: "2023",
      price: "9 500 000 руб",
      photo: "../../images/cards/__item/zeekr-009.jpg",
    },
    {
      country: "china",
      type: "sedan",
      model: "Hongqi H5",
      characteristics: "Бензин | 1.5л | передний",
      tag1: "2023",
      price: "3 100 000 руб",
      photo: "../../images/cards/__item/hongqi-h5.jpg",
    },
    // KOREA
    {
      country: "korea",
      type: "hatchback",
      model: "Chevrolet Spark",
      characteristics: "Бензин | 1.0л | передний",
      tag1: "2022",
      tag2: "M400",
      price: "1 200 000 руб",
      photo: "../../images/cards/__item/Chevrolet Spark.jpg",
    },
    {
      country: "korea",
      type: "sedan",
      model: "Kia K5",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "DL3",
      price: "1 950 000 руб",
      photo: "../../images/cards/__item/kia-k5-2021.jpg",
    },
    {
      country: "korea",
      type: "suv",
      model: "Lexus RX500h",
      characteristics: "Гибрид | 2.5л | полный",
      tag1: "2022",
      tag2: "M400",
      price: "1 200 000 руб",
      photo: "../../images/cards/__item/lexus-rx500h.jpg",
    },
    // REWIEWS
    {
      country: "all",
      type: "rewiews",
      model: "Subaru Forester",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2019",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/SubaruForester.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Honda Vezel",
      characteristics: "Бензин | 1.5л | передний",
      tag1: "2019",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/HondaVezel.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Toyota Voxy",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/ToyotaVoxy.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Toyota Voxy",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/ToyotaVoxy.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Toyota Voxy",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/ToyotaVoxy.jpg",
    },
    // RU
    {
      country: "china ru",
      type: "electric hatchback",
      model: "ORA Good Cat",
      characteristics: "Электро | 141 л.с. | передний",
      tag1: "2022",
      price: "2 400 000 руб",
      photo: "../../images/cards/__item/oragc.jpg",
    },
    {
      country: "ru",
      type: "electric hatchback",
      model: "BYD Seagull",
      characteristics: "Электро | 74 л.с. | передний",
      tag1: "2022",
      price: "2 300 000 руб",
      photo: "../../images/cards/__item/byd-seagull.jpg",
    },
  ];
  const cardsInJson = JSON.stringify(cards);
  // console.log(cardsInJson);
  const cardsFromJson = JSON.parse(cardsInJson);

  let allWrapperBlocksFilters = document.querySelectorAll(
    ".filters[data-filters-for-slider]"
  );

  allWrapperBlocksFilters.forEach((blockWithFilters) => {
    initializationFilter(blockWithFilters);
    blockWithFilters.addEventListener("change", () =>
      initializationFilter(blockWithFilters)
    );
  });

  function initializationFilter(blockWithFilters) {
    const correspondingSliderName = blockWithFilters.dataset.filtersForSlider;
    const correspondingSlider = document.querySelector(
      `[data-slider-name="${correspondingSliderName}"]`
    );
    if (!correspondingSlider) {
      return console.log(
        "Please add attribute [data-slider-name] for .slider-cards__wrapper-items"
      );
    }
    clearSlider(correspondingSlider);

    const cardTemplate = correspondingSlider.querySelector(
      "#template-for-car-card"
    );
    const valueCurrentFilters =
      getValuesCurrentlySelectedFilters(blockWithFilters);
    const cardDataFitsTheFilter = searchData(
      valueCurrentFilters,
      cardsFromJson
    );

    insertCards(cardDataFitsTheFilter, cardTemplate, correspondingSlider);

    function clearSlider(slider) {
      slider.querySelectorAll(".car-card").forEach((block) => {
        block.remove();
      });
    }

    function getValuesCurrentlySelectedFilters(blockWithFilters) {
      let blocksInput = blockWithFilters.querySelectorAll(
        'input[type="radio"]'
      );

      const selectedFilters = [];
      blocksInput.forEach((block) => {
        if (block.checked) {
          const key = block.getAttribute("name");
          const value = block.getAttribute("value");
          selectedFilters.push({ [key]: value });
        }
      });
      return selectedFilters;
    }

    function searchData(valueFilters, source) {
      const cardsFits = source.filter((card) => {
        let countFits = 0;

        valueFilters.forEach((filter) => {
          for (const key in filter) {
            // filter[key] == card[key] ? (countFits += 1) : (countFits -= 1);
            card[key].includes(filter[key])
              ? (countFits += 1)
              : (countFits -= 1);
          }
        });

        return valueFilters.length <= countFits;
      });
      return cardsFits;
    }

    function insertCards(cardsData, tepmlate, correspondingSlider) {
      cardsData.forEach((dataForOneCard) => {
        const blockCard = tepmlate.content.firstElementChild.cloneNode(true);
        const allBlocksInCard = blockCard.querySelectorAll("*");
        const postfixDataTag = "modalAuto";

        allBlocksInCard.forEach((block) => {
          let manageAttribute;
          for (const nameAttribute in block.dataset) {
            if (nameAttribute.startsWith(postfixDataTag)) {
              manageAttribute = nameAttribute
                .slice(postfixDataTag.length)
                .toLowerCase();
            }
          }
          if (!manageAttribute) {
            return;
          }
          if (dataForOneCard[manageAttribute]) {
            block.innerHTML = dataForOneCard[manageAttribute];
          } else {
            block.remove();
          }

          if (manageAttribute == "photo") {
            block.setAttribute("src", dataForOneCard[manageAttribute]);
          }
        });

        blockCard.classList.add("car-card--add");
        correspondingSlider.append(blockCard);
      });
    }

    return;
  }
}
blockFiltering();

function pagesInPage() {
  const mainBlock = document.querySelector(".flipping-pages");
  if (mainBlock == null) {
    return;
  }
  window.addEventListener("load", initialPageInPage);

  function initialPageInPage() {
    const wrapperBlocks = mainBlock.querySelector(
      ".flipping-pages__wrapper-items"
    );
    const blocks = wrapperBlocks.querySelectorAll("[data-card-with-info]");
    setTheSequenceNumberOnTheBlocks(blocks);
    const theNumberOfBlocksVisibleAtTheSameTime =
      getTheNumberOfVisibleBlocksWithoutScrolling(blocks);
    const countPages = Math.ceil(
      blocks.length / theNumberOfBlocksVisibleAtTheSameTime
    );

    const wrapperBlockControls = mainBlock.querySelector(
      ".flipping-pages__wrapper-controls"
    );
    const nameClassAdd = "flipping-pages__control-item--selected";
    const cloneWrapperBlockControls = wrapperBlockControls.cloneNode(true);

    createBlocksControl(cloneWrapperBlockControls, 1);
    scrollWrapperToSelectedPage(1);

    wrapperBlockControls.addEventListener("mouseup", manage);

    function manage(event) {
      const targetBlock = event.target.closest("[data-page]");
      if (!targetBlock) {
        return;
      }
      const theValueOfThePageForTheTransition = Number(
        targetBlock.dataset.page
      );

      createBlocksControl(
        cloneWrapperBlockControls,
        theValueOfThePageForTheTransition
      );
      scrollWrapperToSelectedPage(theValueOfThePageForTheTransition);
    }
    function setTheSequenceNumberOnTheBlocks(collectionOfNumberingBlocks) {
      collectionOfNumberingBlocks.forEach((block, index) => {
        block.dataset.numberItem = index;
      });
    }
    function getTheNumberOfVisibleBlocksWithoutScrolling(blocksForCounting) {
      const parent = blocksForCounting[0].parentNode;
      const theFirstInvisibleElement = Array.from(blocksForCounting).findIndex(
        (block) => {
          if (
            block.getBoundingClientRect().right >
            parent.getBoundingClientRect().right
          ) {
            return true;
          } else if (
            block.getBoundingClientRect().bottom >
            parent.getBoundingClientRect().bottom
          ) {
            return true;
          }
        }
      );
      if (theFirstInvisibleElement == -1) {
        return blocks.length;
      }
      return theFirstInvisibleElement;
    }
    function createBlocksControl(cloneParentControls, selectedNumberPage) {
      const nameAttribute = "data-page";
      const array = Array.from(
        cloneParentControls
          .cloneNode(true)
          .querySelectorAll(`[${nameAttribute}]`)
      ).map((block, index) => {
        const attributeForThePageNumber = block.getAttribute(nameAttribute);
        switch (attributeForThePageNumber) {
          case "start":
            block.setAttribute(nameAttribute, "1");
            break;

          case "previous":
            if (selectedNumberPage - 1 < 1) {
              block.setAttribute(nameAttribute, "1");
            } else {
              block.setAttribute(nameAttribute, `${selectedNumberPage - 1}`);
            }
            break;

          case "number":
            const pageNumberToGoTo = index - 2 + selectedNumberPage;
            const innerBlockForText = block.querySelector("span");

            block.classList.remove(nameClassAdd);
            block.setAttribute(nameAttribute, pageNumberToGoTo);
            block.setAttribute("title", "Страница " + pageNumberToGoTo);
            innerBlockForText.innerHTML = pageNumberToGoTo;

            if (pageNumberToGoTo > countPages) {
              return null;
            }
            if (pageNumberToGoTo == selectedNumberPage) {
              block.classList.add(nameClassAdd);
            }
            if (index == 6 && pageNumberToGoTo + 2 < countPages) {
              block.setAttribute(nameAttribute, `${pageNumberToGoTo + 6}`);
              innerBlockForText.innerHTML = `${pageNumberToGoTo + 6}`;
            }
            if (index == 6 && pageNumberToGoTo + 6 > countPages) {
              block.setAttribute(nameAttribute, `${pageNumberToGoTo}`);
              innerBlockForText.innerHTML = `${pageNumberToGoTo}`;
            }
            break;

          case "next":
            if (selectedNumberPage + 1 >= countPages) {
              block.setAttribute(nameAttribute, countPages);
            } else {
              block.setAttribute(nameAttribute, `${selectedNumberPage + 1}`);
            }
            break;

          case "end":
            block.setAttribute(nameAttribute, countPages);
            break;

          case "more":
            if (countPages < 5) {
              return null;
            }
            if (selectedNumberPage + 4 > countPages) {
              return null;
            }
            break;

          default:
            console.log("Do not seraching [data-page]!");
            break;
        }
        return block;
      });

      wrapperBlockControls.innerHTML = "";
      array.forEach((block) => {
        if (block) {
          wrapperBlockControls.append(block);
        }
      });
      return;
    }
    function scrollWrapperToSelectedPage(seletedNumberPage) {
      const attributeNameForDisplayingTheLastPage = "data-styles-for-last-page";
      const numberFirstBlocksForShowing =
        (seletedNumberPage - 1) * theNumberOfBlocksVisibleAtTheSameTime;
      const numberLastPage = countPages;

      showAllBlocks(blocks);
      scrollToSelectedPage(blocks);
      hideBlocksOnLastPage(blocks);

      function showAllBlocks(blocks) {
        blocks.forEach((block) => (block.style.display = null));
        wrapperBlocks.removeAttribute(attributeNameForDisplayingTheLastPage);
      }
      function scrollToSelectedPage(blocks) {
        if (seletedNumberPage == 1) {
          document.body.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
          return;
        }
        blocks[numberFirstBlocksForShowing].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
      function hideBlocksOnLastPage(blocks) {
        if (numberLastPage == seletedNumberPage) {
          wrapperBlocks.setAttribute(attributeNameForDisplayingTheLastPage, "");
          blocks.forEach((block, index) => {
            if (index < numberFirstBlocksForShowing) {
              block.style.display = "none";
            }
          });
        }
      }
    }

    return;
  }
  return;
}
pagesInPage();

function tepmplatesForFlippingPages() {
  const mainBlock = document.querySelector(".flipping-pages");

  if (mainBlock == null) {
    return;
  }

  const wrapperBlockPages = mainBlock.querySelector(
    ".flipping-pages__wrapper-items"
  );
  const sourceBlocks = wrapperBlockPages.querySelectorAll(
    "[data-card-with-info]"
  );
  if (!sourceBlocks) {
    return;
  }
  const clonesSourceBlocks = Array.from(sourceBlocks).map((block) => {
    return block.cloneNode(true);
  });

  const observerForWrapperBlockPages = new MutationObserver(insertCards);
  observerForWrapperBlockPages.observe(wrapperBlockPages, {
    childList: true,
    subtree: true,
  });

  const theNumberOfInserts = 40;

  insertCards(theNumberOfInserts, clonesSourceBlocks);

  function insertCards(theNumberOfInserts, blockForInsert) {
    if (!wrapperBlockPages.querySelectorAll("[data-card-with-info]")) {
      return;
    }

    for (let index = 0; index < theNumberOfInserts; index++) {
      blockForInsert.forEach((block) => {
        wrapperBlockPages.append(block.cloneNode(true));
      });
    }
  }
}
tepmplatesForFlippingPages();

// function mainSlider() {
//     let mainBlockSlider = document.querySelector('.main-slider')
//     if (!mainBlockSlider) {
//         return
//     }
//     const blockFrameForItems = mainBlockSlider.querySelector('.main-slider__items')
//     const sliderItems = blockFrameForItems.querySelectorAll('.main-slider__item')
//     const sliderBlockWrapperControls = mainBlockSlider.querySelectorAll('.main-slider__controls')[0]
//     let sliderControls = sliderBlockWrapperControls.querySelectorAll('.main-slider__control-item')

//     createControlsForSlider()

//     mainBlockSlider.addEventListener('change', initializationControl)

//     function createControlsForSlider() {

//         let templateControl = copyBlockWithSliderControl()
//         templateControl.removeAttribute('checked');
        
//         clearBlocksControl()
//         addTemplatesInSlider()
//         firstControlsElementCheked()
        
//         function copyBlockWithSliderControl() {
//             return sliderControls[0].cloneNode(true)
//         }
//         function clearBlocksControl() {
//             sliderBlockWrapperControls.innerHTML= ''
//         }
//         function addTemplatesInSlider() {
            
//             sliderItems.forEach(() => {
//                 let variableForUseInHTML = templateControl.cloneNode()
//                 sliderBlockWrapperControls.append(variableForUseInHTML)
//             });
//         }
//         function firstControlsElementCheked() {
//             let controlBlock = sliderBlockWrapperControls.querySelector('.main-slider__control-item')
//             controlBlock.setAttribute('checked','')
//         }
        
//     }

//     function initializationControl() {

//         updateHavingControls()

//         let eventControl = event.target
//         sliderControls.forEach((controlElement, controlIndex) => {
            
//             if (eventControl == controlElement) {
//                 sliderItems.forEach((item, itemIndex)=> {
//                     if (controlIndex == itemIndex) {
//                         movingItem(item)
//                     }
//                 });
//             }
            
//         });
        
//         function updateHavingControls() {
//             sliderControls = sliderBlockWrapperControls.querySelectorAll('.main-slider__control-item')
//         }

//         function movingItem(item) {
//             item.scrollIntoView({
//                 block: 'nearest',
//                 inline: 'nearest',
//                 behaivor: 'smooth'
//             });
//         }
        
//     }
// }
// mainSlider()
// export {mainSlider}

function mainSlider() {
  // return
    let mainBlockSlider = document.querySelector('.main-slider')
    if (!mainBlockSlider) {
        return
    }
    const blockWrapperForItems = mainBlockSlider.querySelector('.main-slider__items')
    const sliderItems = blockWrapperForItems.querySelectorAll('.main-slider__item')
    const blockWrapperControls = mainBlockSlider.querySelector('.main-slider__controls')

    createControls()

    blockWrapperControls.addEventListener('change', rewindSlide)

    function rewindSlide(event) {

        const blockTarget = event.target
        const orderNumberItemInSlider = blockTarget.getAttribute('for-item-number')

        movingItem(orderNumberItemInSlider)

        function movingItem(orderNumber) {
            sliderItems[orderNumber].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
                behaivor: 'smooth'
            });
        }
    }

    function createControls() {
        const cloneBlock = getCloneControls(blockWrapperControls)
        
        clearOldControls(blockWrapperControls)
        addTheRequiredNumberOfBlocks(cloneBlock)

        function getCloneControls(wrapperControl) {
            const blockControl = wrapperControl.querySelector('.main-slider__controls-item')
            return blockControl.cloneNode(true) 
        }

        function clearOldControls(wrapperControls) {
            wrapperControls.innerHTML = ''
        }

        function addTheRequiredNumberOfBlocks(templateBlock) {
            sliderItems.forEach((sliderItem, index) => {
                const cloneTemplateBlock = templateBlock.cloneNode(true)
                setBlockAttributes(cloneTemplateBlock, index)
                blockWrapperControls.append(cloneTemplateBlock);
            })
        }

        function setBlockAttributes(block, orderNumber) {
            block.removeAttribute('checked')
            if (orderNumber == 0) {
                block.checked = true
                // block.setAttribute('checked', '')
            }
            block.setAttribute('for-item-number', `${orderNumber}`)
        }
    }
}
mainSlider()
function openAndClosePopularMenu() {
    const popularMenuBlock = document.querySelector('.menu-popular')
    
    if (!checkingBlockAvailability()) {
        return
    }
    const popularMenuButtonOpen = document.querySelector('.header__button-menu')
    const popularMenuButtonClose = document.querySelector('.menu-popular__close-menu')

    setDefaultPosition()

    popularMenuButtonOpen.addEventListener('mousedown', showBlock)
    popularMenuButtonClose.addEventListener('mousedown', hideBlock)

    function checkingBlockAvailability() {
        if (popularMenuBlock) {
            return true
        }
        console.log('No block "menu-popular"!');
        return false
    }
    
    function setDefaultPosition() {
        popularMenuBlock.classList.remove('menu-popular--show')
    }

    function showBlock() {
        popularMenuBlock.classList.add('menu-popular--show')
        lockAndUnlockScrollBody(true)
    }

    function hideBlock() {
        setDefaultPosition()
        lockAndUnlockScrollBody(false)
    }

    function lockAndUnlockScrollBody(state) {
        if (state == true) {
            document.body.style.overflow = 'hidden';
        }
        if (state == false) {
            document.body.style.overflow = 'visible';
        }
    }

}
openAndClosePopularMenu()
// export {openAndClosePopularMenu}
// export default {openAndClosePopularMenu}

function modalWindow() {
  document.body.addEventListener("mouseup", manageModalWindow);

  const nameAttributeForOpening = "data-open-modal-window";
  const modalWindowAttribute = "data-modal-window";
  const selectorInnerWrapModal = ".modal-order-similar__inner";
  const selectorBlockWithInfo = "[data-card-with-info]";
  const prefixForDataAttribute = "modal";

  function manageModalWindow(event) {
    const targetBlock = checkTargetBlock(event);

    if (!targetBlock) {
      return;
    } else if (targetBlock.closest(`${selectorInnerWrapModal}`)) {
      return;
    } else if (targetBlock.closest(`[${nameAttributeForOpening}]`)) {
      const modalBlock = getBlockWithModal(event);
      if (!modalBlock) {
        console.log(`There is no modal window with that name:`);
        console.log(
          event.target
            .closest(`[${nameAttributeForOpening}]`)
            .getAttribute(`${nameAttributeForOpening}`)
        );
        return;
      }
      transferDataFromTargetBlock(targetBlock, modalBlock);
      openModal(modalBlock);
    } else if (targetBlock.closest(`[${modalWindowAttribute}]`)) {
      const modalBlock = event.target;
      closeModal(modalBlock);
    } else {
      console.log("an unhandled event from the block:");
      console.log(targetBlock);
    }
  }

  function checkTargetBlock(event) {
    return event.target.closest(`[${nameAttributeForOpening}]`)
      ? event.target
      : event.target.closest(`[${modalWindowAttribute}]`)
      ? event.target
      : event.target.closest(`${selectorInnerWrapModal}`)
      ? event.target
      : false;

    // switch (true) {
    //   case !!event.target.closest(`[${nameAttributeForOpening}]`):
    //     return event.target;
    //   case !!event.target.closest(`[${modalWindowAttribute}]`):
    //     return event.target;
    //   case !!event.target.closest(`${selectorInnerWrapModal}`):
    //     return event.target;
    //   default:
    //     return false;
    // }
  }

  function openModal(modalBlock) {
    document.body.classList.add("scroll-lock");
    modalBlock.addEventListener("close", (event) =>
      document.body.classList.remove("scroll-lock")
    );
    modalBlock.showModal();
  }

  function closeModal(modalBlock) {
    document.body.classList.remove("scroll-lock");
    modalBlock.close();
  }

  function getBlockWithModal(event) {
    const blockWithNameModalWindow = event.target.closest(
      `[${nameAttributeForOpening}]`
    );
    const nameModalWindow = blockWithNameModalWindow.getAttribute(
      nameAttributeForOpening
    );
    const modalWindow = document.querySelector(
      `[${modalWindowAttribute}='${nameModalWindow}']`
    );

    return modalWindow;
  }

  function transferDataFromTargetBlock(targetBlock, modalBlock) {
    const cardWithInfo = targetBlock.closest(`${selectorBlockWithInfo}`);

    if (!cardWithInfo) {
      return;
    }

    const allBlocksInModalBlock = modalBlock.querySelectorAll("*");
    // allBlocksForInsertingData.
    const allBlocksForInsertingData = searchBlocksWithInfo(
      allBlocksInModalBlock
    );

    insertingDataIntoModalBlock(allBlocksForInsertingData, cardWithInfo);

    function insertingDataIntoModalBlock(
      allBlocksForInsertingData,
      cardWithInfo
    ) {
      allBlocksForInsertingData.forEach((blockForInsertingData) => {
        const allAttributesInBlock = blockForInsertingData.attributes;

        for (const attribute of allAttributesInBlock) {
          if (attribute.name.startsWith(`data-${prefixForDataAttribute}`)) {
            const blockWithDataSource = cardWithInfo.querySelector(
              `[${attribute.name}]`
            );

            if (!blockWithDataSource) {
              setTheBlockVisibilityTag(blockForInsertingData, false);
              continue;
            }

            setTheBlockVisibilityTag(blockForInsertingData, true);

            const dataSource = blockWithDataSource.innerHTML;

            if (dataSource == "") {
              const sourceSrcTagImage = blockWithDataSource.getAttribute("src");
              blockForInsertingData.setAttribute("src", `${sourceSrcTagImage}`);
            }

            blockForInsertingData.innerHTML = dataSource;

            function setTheBlockVisibilityTag(block, state) {
              block.setAttribute("data-show-block", `${state}`);
            }
          }
        }
      });
    }

    return;

    function searchBlocksWithInfo(allBlocksInCard) {
      const resultArray = [];

      for (const block of allBlocksInCard) {
        const attributes = block.dataset;
        if (checkAttributes(attributes)) {
          resultArray.push(block);
        }
      }
      function checkAttributes(attributes) {
        for (const attribute in attributes) {
          if (attribute.startsWith(prefixForDataAttribute)) {
            return true;
          }
          return false;
        }
      }
      return resultArray;
    }
  }
}
modalWindow();
// export {modalWindow}

function popupMenuNav() {
    
    const navMenuBlock = document.querySelector('.nav')

    document.addEventListener('mouseover', openMenu)
    document.addEventListener('mouseout', closeMenu)

    function openMenu() {

        const blockTarget = event.target.closest('.nav__wrapper-links')
        if (!blockTarget) {
            return
        }

        const navMenu = blockTarget.querySelector('.nav__popup-menu')
        if (!navMenu) {
            return
        }
        
        navMenu.classList.add('nav__popup-menu--open')
    }

    function closeMenu() {

        const blockTarget = event.target.closest('.nav__wrapper-links')
        if (!blockTarget) {
            return
        }

        const blockPopupMenu = event.relatedTarget.closest('.nav__popup-menu')
        if (blockPopupMenu) {
            return
        }

        const currentPopupBlocks = navMenuBlock.querySelectorAll('.nav__popup-menu')

        currentPopupBlocks.forEach(blockMenuPopup => {
            blockMenuPopup.classList.remove('nav__popup-menu--open')
        });
        
    }
    
}
popupMenuNav()
function scrollToTopPage() {

    const buttonsForScroll = document.querySelectorAll('.on-screen-navigation')

    buttonsForScroll.forEach(button => {
        button.addEventListener('click', scrollToTop)
    });

    function scrollToTop() {
        window.scrollTo( {
            top: 0,
            left: 0,
            behavior: 'smooth'
        } )
    }
}
scrollToTopPage()
function flippingSlider() {
  const allBlocksControl = document.querySelectorAll(
    ".slider-cards__wrapper-for-controls"
  );

  allBlocksControl.forEach((blockWrapper, index) => {
    initializationFlippingSlider(blockWrapper);
  });

  function initializationFlippingSlider(blockWrapper) {
    const wrapperControls = blockWrapper;
    const controlPrevious = wrapperControls.querySelector(
      ".slider-cards__control-previous"
    );
    const controlNext = wrapperControls.querySelector(
      ".slider-cards__control-next"
    );

    let correspondingSlider = getCorrespondingSlider();
    let currentCorrespondingSliderItems = getSliderItems();
    let currentOrdinalNumber;

    let observerForSlider = new MutationObserver(updateSlider);
    observerForSlider.observe(correspondingSlider, {
      childList: true,
      subtree: true,
    });

    controlPrevious.addEventListener("mouseup", manage);
    controlNext.addEventListener("mouseup", manage);
    window.addEventListener("load", updateSlider);

    function getCorrespondingSlider() {
      let wrapperSlider = wrapperControls.closest(".slider-cards");
      let sliderBlock = wrapperSlider.querySelector("[data-slider-name]");
      if (!sliderBlock) {
        console.log(
          "Please add attribute [data-slider-name] for cards wrapper"
        );
      }
      return sliderBlock;
    }

    function getSliderItems() {
      return correspondingSlider.querySelectorAll("[data-card-with-info]");
    }

    function updateSlider() {
      currentCorrespondingSliderItems = getSliderItems();
      currentOrdinalNumber = 0;
      setSerialNumberAttribute(currentCorrespondingSliderItems);
    }

    function manage() {
      if (event.target == controlPrevious) {
        setNewCurrentOrdinalNumber("previous");
      }
      if (event.target == controlNext) {
        setNewCurrentOrdinalNumber("next");
      }

      movingSlider(currentCorrespondingSliderItems[currentOrdinalNumber]);

      function setNewCurrentOrdinalNumber(directionOfMovement) {
        if (directionOfMovement == "previous") {
          currentOrdinalNumber--;
        }

        if (currentOrdinalNumber < 0) {
          return (currentOrdinalNumber = 0);
        }

        if (getTheRestOfTheScroll(correspondingSlider) == 0) {
          return currentOrdinalNumber;
        }

        if (directionOfMovement == "next") {
          return currentOrdinalNumber++;
        }

        function getTheRestOfTheScroll(correspondingSlider) {
          const sliderWidthWithScroll = correspondingSlider.scrollWidth;
          const sliderWidthWithoutScroll =
            correspondingSlider.getBoundingClientRect().width;

          const theRestOfTheScroll =
            sliderWidthWithScroll -
            (sliderWidthWithoutScroll + correspondingSlider.scrollLeft);

          return theRestOfTheScroll;
        }
      }

      function movingSlider(moveToElement) {
        moveToElement.scrollIntoView({
          // вертикальное расположение
          block: "nearest",
          // горизонтальное расположение
          inline: "start",
          // плавность прокрутки
          behaivor: "smooth",
        });
      }
    }

    function setSerialNumberAttribute(items) {
      items.forEach((currentItem, index) => {
        currentItem.setAttribute("data-serial-number", `${index}`);
      });
    }
  }
}
flippingSlider();

// function flippingPagesOnContols() {
//     const blockWrapperControls = document.querySelector('.flipping-pages__wrapper-controls')
//     const collectionItemsControl = blockWrapperControls.querySelectorAll('.flipping-pages__control-input')
//     const blockFlippingPages = document.querySelector('.flipping-pages__wrapper-items')

//     let observerForWrapperBlockPages = new MutationObserver(setDefaultParam)
//     observerForWrapperBlockPages.observe(blockFlippingPages, {childList: true, subtree: true})

//     window.addEventListener('load', setDefaultParam)
//     blockWrapperControls.addEventListener('input', manage)

//     function setDefaultParam() {
//         console.log('default set!');
//         // setTopScrollOnZero()
//         deletingAttributesCheckedOnAllInputs()
//         setAttributeCheckedOnFirstElement()
//         hideAllBlocksControlsWithSerialNumber()
//         let arrayOfPagesStartYCoordinates = getArrayOfPagesStartYCoordinates()
//         console.log(arrayOfPagesStartYCoordinates);
//         // let countFlippingPages = calcCountFlippingPages()
//         // console.log(countFlippingPages);
//         // showBlocksControlsWithSerialNumber()
//     }

//     function manage() {
//         return
//         console.log(event.target);
//         return
        
//         let countFlippingPages = calcCountFlippingPages()
//         let arrayOfPagesStartXCoordinates = getArrayOfPagesStartXCoordinates()
        
        
//         let pageSerialNumber = getCurrentNumberPage()
        
//         scrollToCurrentPage(event, pageSerialNumber)
//     }



//     function deletingAttributesCheckedOnAllInputs() {
//         collectionItemsControl.forEach(blockInput => {
//             blockInput.removeAttribute('checked')
//         });
//     }

//     function setAttributeCheckedOnFirstElement() {
//         let firstSerialNumber = blockWrapperControls.querySelector('#flipping-pages__page-1')
//         // let firstSerialNumber = blockWrapperControls.querySelector('[value="1"]')
//         firstSerialNumber.setAttribute('checked', '')
//     }

//     function hideAllBlocksControlsWithSerialNumber() {
//         // for (let index = 2; index < 100; index++) {
            
//         //     let selector = `[value="${index}"]`
//         //     let blockWithSerialNumber = blockWrapperControls.querySelector(selector)
            
//         //     if (blockWithSerialNumber) {
//         //         let secetor2 = blockWithSerialNumber.getAttribute('id')
//         //         let label = blockWrapperControls.querySelector(`label[for = "${secetor2}"]`)
//         //         label.classList.add('flipping-pages__control-item--hidden')
//         //     }
            
//         // }

//         collectionItemsControl.forEach(iterableBlock => {
//             let attribute = iterableBlock.getAttribute('value')
//             let checkAttributeOnNumber = attribute * 2
            
//             if (checkAttributeOnNumber && attribute !== '1') {
                
//                 let blockInput = blockWrapperControls.querySelector(`[value="${attribute}"`)
//                 let selectorBlockForHidden = blockInput.getAttribute('id')
//                 let blockForHidden = blockWrapperControls.querySelector(`[for = "${selectorBlockForHidden}"]`)
                
//                 blockForHidden.classList.add('flipping-pages__control-item--hidden')
//             }

//         });
//     }

//     function getArrayOfPagesStartYCoordinates() { 
//         const parentBlock = blockWrapperControls.closest('.flipping-pages')
//         const wrapperContent = parentBlock.querySelector('.flipping-pages__wrapper-items')
//         const fullHeightContent = wrapperContent.scrollHeight
//         const heightVisibleContent = wrapperContent.getBoundingClientRect().height
//         let arrayCoordinatesY = []

//         let currentCoordinate = 0
//         do {
//             arrayCoordinatesY.push(currentCoordinate)
//             currentCoordinate += heightVisibleContent

//         } while (currentCoordinate < fullHeightContent);


//         // for (let index = 0; index < fullHeightContent; index + heightVisibleContent) {
//         //     console.log(index);
//         //     // arrayCoordinatesY.unshift(index)
//         // }

//         return arrayCoordinatesY
//     }
// }
// flippingPagesOnContols()
function sliderIndicator() {
    const allBlocksControl = document.querySelectorAll('.slider-cards__indicator')
    allBlocksControl.forEach((blockWrapper, index) => {
        initializationSliderIndicator(blockWrapper)
        // if (index == 0) {
        //     initializationSliderIndicator(blockWrapper)
        // }
        
    });

    function initializationSliderIndicator(blockWrapper) {

        const wrapperIndicator = blockWrapper
        const indicatorFilling = wrapperIndicator.querySelector('.slider-cards__indicator-filling')
        let correspondingSlider = getCorrespondingSlider()
        let correspondingSliderItems = getSliderItems()
        let initialFillInPercentage = getInitialFillPercentage()

        let observerForSlider = new MutationObserver(manage)
        observerForSlider.observe(correspondingSlider, {childList: true, subtree: true})
        
        correspondingSlider.addEventListener('scroll', fillIndicator)

        manage()

        function getCorrespondingSlider() {
            let wrapperSlider = wrapperIndicator.closest('.slider-cards')
            let sliderBlock = wrapperSlider.querySelector('[data-slider-name]')
            if (!sliderBlock) {
                console.log('Please add attribute [data-slider-name] for cards wrapper');
            }
            return sliderBlock
        }

        function getSliderItems() {
            return correspondingSlider.querySelectorAll('[data-card-with-info]')
        }

        function manage() {

            correspondingSlider = getCorrespondingSlider()
            correspondingSliderItems = getSliderItems()

            if (!needForScrolling()) {
                showScroll(false)
                return
            }
            showScroll(true)

            initialFillInPercentage = getInitialFillPercentage()
            showFilling(initialFillInPercentage, '%')

            return
        }
        
        function fillIndicator() {
            
            let currentSliderScrollAsAPercentage = getScrollMovementPercentage()
            // showFilling(currentSliderScrollAsAPercentage, '%')
            // return
            let finalWidthForFillingInPixel = getTheFinalFillWidthInPixel()
            // console.log(finalWidthForFillingInPixel);

            showFilling(finalWidthForFillingInPixel, 'px')

            function getScrollMovementPercentage() {
                let sliderWidthWithScroll = correspondingSlider.scrollWidth
                let sliderWrapperWidth = correspondingSlider.clientWidth
                let scrollWidth = sliderWidthWithScroll - sliderWrapperWidth
                let currentScrollOfTheSliderWrapper = correspondingSlider.scrollLeft
                let scrollMovementPercentage = currentScrollOfTheSliderWrapper / scrollWidth * 100
                return scrollMovementPercentage
                // return Math.ceil(scrollMovementPercentage)
            }
            
            function getTheFinalFillWidthInPixel() {
                let fullWidthInPixels = wrapperIndicator.getBoundingClientRect().width
                let widthInPixelsOfOnePercent = fullWidthInPixels / 100
                let calculatedFillInPixels = initialFillInPercentage * widthInPixelsOfOnePercent
                let initialFillInPixel = calculatedFillInPixels
                
                // console.log(initialFillInPercentage);

                let widthFromCurrentSliderScrollInPixel = getWidthFromCurrentSliderScroll()

                function getWidthFromCurrentSliderScroll() {
                    let totalWidthForFilling = wrapperIndicator.getBoundingClientRect().width
                    let remainingWidthForFilling = totalWidthForFilling - initialFillInPixel
                    let onePercentOfTheRemainingWidthInPixels = remainingWidthForFilling / 100
                    let widthFromCurrentSliderScroll = currentSliderScrollAsAPercentage * onePercentOfTheRemainingWidthInPixels
                    return widthFromCurrentSliderScroll
                }
                
                let finalFillWidth = initialFillInPixel + widthFromCurrentSliderScrollInPixel
                
                return finalFillWidth
            }

        }

        function getInitialFillPercentage() {

            let rangeOfMovement = getSerialNumberRange()

            function getSerialNumberRange() {
                let resultArray = []

                resultArray[0] = getTheStartingNumberOfTheItem()
                resultArray[1] = getTheLastItemNumberToScroll()

                if (resultArray[0] == undefined || resultArray[1] == undefined) {
                    resultArray = []
                }
                
                return resultArray
                
                function getTheStartingNumberOfTheItem() {
                    let sliderCoordinateXRightSide = correspondingSlider.getBoundingClientRect().right

                    for (let serialNumberItem = 0; serialNumberItem < correspondingSliderItems.length; serialNumberItem++) {

                        let currentItem = correspondingSliderItems[serialNumberItem]
                        let currentItemCoordinateXRightSide = currentItem.getBoundingClientRect().right
                        // hidden pixel offset
                        let stockOfPixelsInWidth = 10
                        currentItemCoordinateXRightSide -= stockOfPixelsInWidth

                        if (sliderCoordinateXRightSide <= currentItemCoordinateXRightSide) {
                            serialNumberItem--
                            return serialNumberItem
                        }
                    }
                }
                
                function getTheLastItemNumberToScroll() {

                    let fullWidth = correspondingSlider.scrollWidth
                    let wrapperWidth = correspondingSlider.clientWidth
                    
                    let outsideFrameLeftSide = correspondingSlider.getBoundingClientRect().left + fullWidth - wrapperWidth

                    let startSerialNumber = correspondingSliderItems.length - 1
                    let endSerialNumber = resultArray[0]
                    
                    for (let serialNumber = startSerialNumber; serialNumber >= endSerialNumber; serialNumber--) {

                        let currentItem = correspondingSliderItems[serialNumber]
                        let currentItemCoordinateX = currentItem.getBoundingClientRect().x
                        
                        if (outsideFrameLeftSide <= currentItemCoordinateX) {
                            // currentItem.style.boxShadow = '0px 0px 20px red'
                            return serialNumber
                        }
                        
                    }
                }
            }

            if (rangeOfMovement.length == 0) {
                return
            }

            let numberOfPartsToFill = rangeOfMovement[1] - rangeOfMovement[0] + 1
            let initialFillWidthInPercentage = 100 / numberOfPartsToFill

            return initialFillWidthInPercentage

            // showInitialFill()

            // function showInitialFill() {
            //     indicatorFilling.style.width = `${initialFillWidthInPercentage}%`
            // }
        }

        function needForScrolling() {
            let fullWidth = correspondingSlider.scrollWidth
            let wrapperWidth = correspondingSlider.clientWidth

            let availableScrollWidth = fullWidth - wrapperWidth

            if (availableScrollWidth <= 0) {
                return false
            }
            return true
        }

        function showScroll(state) {
            let wrapperControlsAndIndicator = wrapperIndicator.closest('.slider-cards__wrapper-for-controls')

            if (state == true) {
                
                wrapperControlsAndIndicator.classList.remove('slider-cards__wrapper-for-controls--hidden')
                return
            }

            if (state == false) {
                
                wrapperControlsAndIndicator.classList.add('slider-cards__wrapper-for-controls--hidden')
                return
            }
            return console.log('Error in determining whether to show or hide the scroll!');
        }

        function showFilling(value, unit) {
            // indicatorFilling.style.width = `${initialFillWidthInPercentage}%`
            indicatorFilling.style.width = `${value}${unit}`
        }
    }
}
sliderIndicator()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1zYWxlcy1hbmQtY2FyZC9jYXItc2FsZXMtYW5kLWNhcmQuanMiLCJmYXEvZmFxLmpzIiwiZmlsdGVycy9maWx0ZXJzLmpzIiwiZmxpcHBpbmctcGFnZXMvZmxpcHBpbmctcGFnZXMuanMiLCJmbGlwcGluZy1wYWdlcy90ZXBtcGxhdGVzLWZvci1mbGlwcGluZy1wYWdlcy5qcyIsIm1haW4tc2xpZGVyL21haW4tc2xpZGVyLmpzIiwibWVudS1wb3B1bGFyL21lbnUtcG9wdWxhci5qcyIsIm1vZGFsLW9yZGVyLXNpbWlsYXIvbW9kYWwtb3JkZXItc2ltaWxhci5qcyIsIm5hdi9uYXYuanMiLCJvbi1zY3JlZW4tbmF2aWdhdGlvbi9vbi1zY3JlZW4tbmF2aWdhdGlvbi5qcyIsInNsaWRlci1jYXJkcy9zbGlkZXItY2FyZHMuanMiLCJmbGlwcGluZy1wYWdlcy9fX3dyYXBwZXItY29udHJvbHMvX193cmFwcGVyLWNvbnRyb2xzLmpzIiwic2xpZGVyLWNhcmRzL19faW5kaWNhdG9yL19faW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNsaWRlcldpdGhPcGVuU2xpZGVzKCkge1xyXG4gIGNvbnN0IGJsb2NrU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNhci1zYWxlcy1hbmQtY2FyZF9fd3JhcHBlci1waWN0dXJlc1wiXHJcbiAgKTtcclxuICBpZiAoIWJsb2NrU2xpZGVyKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IG1haW5JbWFnZUJsb2NrID0gYmxvY2tTbGlkZXIucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNhci1zYWxlcy1hbmQtY2FyZF9fbWFpbi1pbWFnZVwiXHJcbiAgKTtcclxuICBjb25zdCBhZGRpdGlvbmFsSW1hZ2VzV3JhcHBlckJsb2NrID0gYmxvY2tTbGlkZXIucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNhci1zYWxlcy1hbmQtY2FyZF9fYWRkaXRpb25hbC1pbWFnZXMtd3JhcHBlclwiXHJcbiAgKTtcclxuXHJcbiAgYmxvY2tTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbWFuYWdlKTtcclxuXHJcbiAgY3JlYXRlQXR0cmlidXRlc1dpdGhTZXJpYWxOdW1iZXJzKGFkZGl0aW9uYWxJbWFnZXNXcmFwcGVyQmxvY2spO1xyXG4gIHNldE1haW5JbWFnZSgwKTtcclxuICBzZXRBdHRyaWJ1dGVTZXJpYWxOdW1iZXJPbkFycm93KDApO1xyXG5cclxuICBmdW5jdGlvbiBtYW5hZ2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IG1hbmFnZUF0dHJpYnV0ZSA9IGdldE1hbmFnZUF0dHJpYnV0ZShldmVudCk7XHJcblxyXG4gICAgc2V0TWFpbkltYWdlKG1hbmFnZUF0dHJpYnV0ZSk7XHJcbiAgICBzZXRBdHRyaWJ1dGVTZXJpYWxOdW1iZXJPbkFycm93KG1hbmFnZUF0dHJpYnV0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVzV2l0aFNlcmlhbE51bWJlcnMocGFyZW50QmxvY2spIHtcclxuICAgIGNvbnN0IGFsbEFkZGl0aW9uYWxJbWFnZXMgPSBwYXJlbnRCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5jYXItc2FsZXMtYW5kLWNhcmRfX2FkZGl0aW9uYWwtaW1hZ2VcIlxyXG4gICAgKTtcclxuXHJcbiAgICBhbGxBZGRpdGlvbmFsSW1hZ2VzLmZvckVhY2goKGJsb2NrSW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGJsb2NrSW1hZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1zZXJpYWwtbnVtYmVyXCIsIGAke2luZGV4fWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRNYWluSW1hZ2Uoc2VyaWFsTnVtYmVyKSB7XHJcbiAgICBjb25zdCBibG9ja0ltYWdlID0gYWRkaXRpb25hbEltYWdlc1dyYXBwZXJCbG9jay5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgW2RhdGEtc2VyaWFsLW51bWJlcj1cIiR7c2VyaWFsTnVtYmVyfVwiXWBcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFibG9ja0ltYWdlKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIm5vIGhhdmluZyB0aGlzIGltYWdlIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3VyY2VJbWFnZSA9IGJsb2NrSW1hZ2UuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xyXG4gICAgY29uc3QgYWx0SW1hZ2UgPSBibG9ja0ltYWdlLmdldEF0dHJpYnV0ZShcImFsdFwiKTtcclxuXHJcbiAgICBtYWluSW1hZ2VCbG9jay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc291cmNlSW1hZ2UpO1xyXG4gICAgbWFpbkltYWdlQmxvY2suc2V0QXR0cmlidXRlKFwiYWx0XCIsIGFsdEltYWdlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEF0dHJpYnV0ZVNlcmlhbE51bWJlck9uQXJyb3coc2VyaWFsTnVtYmVyKSB7XHJcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBibG9ja1NsaWRlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5jYXItc2FsZXMtYW5kLWNhcmRfX2Fycm93LWxlZnRcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFycm93UmlnaHQgPSBibG9ja1NsaWRlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5jYXItc2FsZXMtYW5kLWNhcmRfX2Fycm93LXJpZ2h0XCJcclxuICAgICk7XHJcbiAgICBjb25zdCBhZGRpdGlvbmFsSW1hZ2VzID0gYWRkaXRpb25hbEltYWdlc1dyYXBwZXJCbG9jay5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5jYXItc2FsZXMtYW5kLWNhcmRfX2FkZGl0aW9uYWwtaW1hZ2VcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFkZGl0aW9uYWxJbWFnZXNFbmRTZXJpYWxOdW1iZXIgPSBhZGRpdGlvbmFsSW1hZ2VzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgYXJyb3dMZWZ0LnNldEF0dHJpYnV0ZShcImRhdGEtc2VyaWFsLW51bWJlclwiLCBgJHtzZXJpYWxOdW1iZXIgLSAxfWApO1xyXG4gICAgYXJyb3dSaWdodC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcmlhbC1udW1iZXJcIiwgYCR7c2VyaWFsTnVtYmVyICsgMX1gKTtcclxuXHJcbiAgICBpZiAoc2VyaWFsTnVtYmVyIC0gMSA8IDApIHtcclxuICAgICAgYXJyb3dMZWZ0LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImRhdGEtc2VyaWFsLW51bWJlclwiLFxyXG4gICAgICAgIGAke2FkZGl0aW9uYWxJbWFnZXNFbmRTZXJpYWxOdW1iZXJ9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcmlhbE51bWJlciArIDEgPiBhZGRpdGlvbmFsSW1hZ2VzRW5kU2VyaWFsTnVtYmVyKSB7XHJcbiAgICAgIGFycm93UmlnaHQuc2V0QXR0cmlidXRlKFwiZGF0YS1zZXJpYWwtbnVtYmVyXCIsIGAkezB9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNYW5hZ2VBdHRyaWJ1dGUoZXZlbnQpIHtcclxuICAgIGNvbnN0IGJsb2NrVGFyZ2V0QXJyb3dMZWZ0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXHJcbiAgICAgIFwiLmNhci1zYWxlcy1hbmQtY2FyZF9fYXJyb3ctbGVmdFwiXHJcbiAgICApO1xyXG4gICAgaWYgKGJsb2NrVGFyZ2V0QXJyb3dMZWZ0KSB7XHJcbiAgICAgIGNvbnN0IHNlcmlhbE51bWJlckltYWdlID1cclxuICAgICAgICBibG9ja1RhcmdldEFycm93TGVmdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcmlhbC1udW1iZXJcIik7XHJcbiAgICAgIHJldHVybiBOdW1iZXIoc2VyaWFsTnVtYmVySW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2NrVGFyZ2V0QXJyb3dSaWdodCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFxyXG4gICAgICBcIi5jYXItc2FsZXMtYW5kLWNhcmRfX2Fycm93LXJpZ2h0XCJcclxuICAgICk7XHJcbiAgICBpZiAoYmxvY2tUYXJnZXRBcnJvd1JpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IHNlcmlhbE51bWJlckltYWdlID1cclxuICAgICAgICBibG9ja1RhcmdldEFycm93UmlnaHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXJpYWwtbnVtYmVyXCIpO1xyXG4gICAgICByZXR1cm4gTnVtYmVyKHNlcmlhbE51bWJlckltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9ja1RhcmdldFNlcmlhbE51bWJlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFxyXG4gICAgICBcIi5jYXItc2FsZXMtYW5kLWNhcmRfX2FkZGl0aW9uYWwtaW1hZ2VcIlxyXG4gICAgKTtcclxuICAgIGlmIChibG9ja1RhcmdldFNlcmlhbE51bWJlcikge1xyXG4gICAgICBjb25zdCBzZXJpYWxOdW1iZXJJbWFnZSA9XHJcbiAgICAgICAgYmxvY2tUYXJnZXRTZXJpYWxOdW1iZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXJpYWwtbnVtYmVyXCIpO1xyXG4gICAgICByZXR1cm4gTnVtYmVyKHNlcmlhbE51bWJlckltYWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuc2xpZGVyV2l0aE9wZW5TbGlkZXMoKTtcclxuIiwiZnVuY3Rpb24gYWNjb3JkZW9uKCkge1xyXG4gIGNvbnN0IGJsb2NrUGFyZW50QWNjb3JkZW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXFfX3F1ZXN0aW9uc1wiKTtcclxuXHJcbiAgaWYgKCFibG9ja1BhcmVudEFjY29yZGVvbikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYmxvY2tQYXJlbnRBY2NvcmRlb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hbmFnZUFjY29yZGVvbik7XHJcblxyXG4gIGZ1bmN0aW9uIG1hbmFnZUFjY29yZGVvbigpIHtcclxuICAgIGNvbnN0IGJsb2NrV3JhcHBlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmZhcV9fcXVlc3Rpb24td3JhcHBlclwiKTtcclxuXHJcbiAgICBpZiAoIWJsb2NrV3JhcHBlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYmxvY2tXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJmYXFfX3F1ZXN0aW9uLXdyYXBwZXItLW9wZW5cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbmFjY29yZGVvbigpO1xyXG4vLyBleHBvcnQge2FjY29yZGVvbn1cclxuIiwiZnVuY3Rpb24gYmxvY2tGaWx0ZXJpbmcoKSB7XHJcbiAgLy8gaGF0Y2hiYWNrcztzZWRhbjtzdXY7bWluaXZhbnM7aHlicmlkcztlbGVjdHJpYztcclxuICAvLyBqYXBhbjtjaGluYTtrb3JlYTtcclxuICBjb25zdCBjYXJkcyA9IFtcclxuICAgIC8vIEpBUEFOXHJcbiAgICB7XHJcbiAgICAgIGNvdW50cnk6IFwiamFwYW5cIixcclxuICAgICAgdHlwZTogXCJoYXRjaGJhY2tcIixcclxuICAgICAgbW9kZWw6IFwiVG95b3RhIFBhc3NvXCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQkdC10L3Qt9C40L0gfCAxLjDQuyB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDIxXCIsXHJcbiAgICAgIHRhZzI6IFwiTkhQMTBcIixcclxuICAgICAgcHJpY2U6IFwiMSAwNDAgMDAwINGA0YPQsVwiLFxyXG4gICAgICBwaG90bzogXCIuLi8uLi9pbWFnZXMvY2FyZHMvX19pdGVtL1RveW90YSBQYXNzby5qcGdcIixcclxuICAgICAgYWR2YW50YWdlOiBcItCf0YDQuNCy0LXQt9C10Lwg0LIg0L7QsdGF0L7QtCDRgdCw0L3QutGG0LjQuSFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvdW50cnk6IFwiamFwYW5cIixcclxuICAgICAgdHlwZTogXCJoYXRjaGJhY2sgaHlicmlkc1wiLFxyXG4gICAgICBtb2RlbDogXCJIb25kYSBGaXRcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCT0LjQsdGA0LjQtCB8IDEuNdC7IHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjNcIixcclxuICAgICAgdGFnMjogXCI2QUEtR1IzXCIsXHJcbiAgICAgIHByaWNlOiBcIjEgNzAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9maXQuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImphcGFuXCIsXHJcbiAgICAgIHR5cGU6IFwiaGF0Y2hiYWNrXCIsXHJcbiAgICAgIG1vZGVsOiBcIlRveW90YSBSb29teVwiLFxyXG4gICAgICBjaGFyYWN0ZXJpc3RpY3M6IFwi0JHQtdC90LfQuNC9IHwgMS4w0LsgfCDQv9C10YDQtdC00L3QuNC5XCIsXHJcbiAgICAgIHRhZzE6IFwiMjAyMVwiLFxyXG4gICAgICB0YWcyOiBcIk05MDBBXCIsXHJcbiAgICAgIHByaWNlOiBcIjk4MCAwMDAg0YDRg9CxXCIsXHJcbiAgICAgIHBob3RvOiBcIi4uLy4uL2ltYWdlcy9jYXJkcy9fX2l0ZW0vcm9vbXkuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImphcGFuXCIsXHJcbiAgICAgIHR5cGU6IFwiaGF0Y2hiYWNrXCIsXHJcbiAgICAgIG1vZGVsOiBcIlRveW90YSBTaWVudGFcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCT0LjQsdGA0LjQtCB8IDEuNdC7IHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjNcIixcclxuICAgICAgdGFnMjogXCJNWFBMMTBHXCIsXHJcbiAgICAgIHByaWNlOiBcIjEgOTIwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9zaWVudGEuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImphcGFuXCIsXHJcbiAgICAgIHR5cGU6IFwiaGF0Y2hiYWNrIGh5YnJpZHNcIixcclxuICAgICAgbW9kZWw6IFwiVG95b3RhIEFxdWFcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCT0LjQsdGA0LjQtCB8IDEuNdC7IHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjJcIixcclxuICAgICAgdGFnMjogXCI2QUEtTVhQS1wiLFxyXG4gICAgICBwcmljZTogXCIxIDU5MCAwMDAg0YDRg9CxXCIsXHJcbiAgICAgIHBob3RvOiBcIi4uLy4uL2ltYWdlcy9jYXJkcy9fX2l0ZW0vYXF1YS5qcGdcIixcclxuICAgIH0sXHJcbiAgICAvLyBDSElOQVxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImNoaW5hXCIsXHJcbiAgICAgIHR5cGU6IFwiZWxlY3RyaWMgaGF0Y2hiYWNrXCIsXHJcbiAgICAgIG1vZGVsOiBcIk9SQSBHb29kIENhdFwiLFxyXG4gICAgICBjaGFyYWN0ZXJpc3RpY3M6IFwi0K3Qu9C10LrRgtGA0L4gfCAxNDEg0Lsu0YEuIHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjJcIixcclxuICAgICAgcHJpY2U6IFwiMiA0MDAgMDAwINGA0YPQsVwiLFxyXG4gICAgICBwaG90bzogXCIuLi8uLi9pbWFnZXMvY2FyZHMvX19pdGVtL29yYWdjLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY291bnRyeTogXCJjaGluYVwiLFxyXG4gICAgICB0eXBlOiBcImVsZWN0cmljIGhhdGNoYmFja1wiLFxyXG4gICAgICBtb2RlbDogXCJCWUQgU2VhZ3VsbFwiLFxyXG4gICAgICBjaGFyYWN0ZXJpc3RpY3M6IFwi0K3Qu9C10LrRgtGA0L4gfCA3NCDQuy7RgS4gfCDQv9C10YDQtdC00L3QuNC5XCIsXHJcbiAgICAgIHRhZzE6IFwiMjAyMlwiLFxyXG4gICAgICBwcmljZTogXCIyIDMwMCAwMDAg0YDRg9CxXCIsXHJcbiAgICAgIHBob3RvOiBcIi4uLy4uL2ltYWdlcy9jYXJkcy9fX2l0ZW0vYnlkLXNlYWd1bGwuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImNoaW5hXCIsXHJcbiAgICAgIHR5cGU6IFwiZWxlY3RyaWMgbWluaXZhbnNcIixcclxuICAgICAgbW9kZWw6IFwiWmVla3IgMDA5XCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQrdC70LXQutGC0YDQviB8IDU0NCDQuy7RgS4gfCDQv9C+0LvQvdGL0LlcIixcclxuICAgICAgdGFnMTogXCIyMDIzXCIsXHJcbiAgICAgIHByaWNlOiBcIjkgNTAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS96ZWVrci0wMDkuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImNoaW5hXCIsXHJcbiAgICAgIHR5cGU6IFwic2VkYW5cIixcclxuICAgICAgbW9kZWw6IFwiSG9uZ3FpIEg1XCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQkdC10L3Qt9C40L0gfCAxLjXQuyB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDIzXCIsXHJcbiAgICAgIHByaWNlOiBcIjMgMTAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9ob25ncWktaDUuanBnXCIsXHJcbiAgICB9LFxyXG4gICAgLy8gS09SRUFcclxuICAgIHtcclxuICAgICAgY291bnRyeTogXCJrb3JlYVwiLFxyXG4gICAgICB0eXBlOiBcImhhdGNoYmFja1wiLFxyXG4gICAgICBtb2RlbDogXCJDaGV2cm9sZXQgU3BhcmtcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCR0LXQvdC30LjQvSB8IDEuMNC7IHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjJcIixcclxuICAgICAgdGFnMjogXCJNNDAwXCIsXHJcbiAgICAgIHByaWNlOiBcIjEgMjAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9DaGV2cm9sZXQgU3BhcmsuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImtvcmVhXCIsXHJcbiAgICAgIHR5cGU6IFwic2VkYW5cIixcclxuICAgICAgbW9kZWw6IFwiS2lhIEs1XCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQkdC10L3Qt9C40L0gfCAyLjDQuyB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDIxXCIsXHJcbiAgICAgIHRhZzI6IFwiREwzXCIsXHJcbiAgICAgIHByaWNlOiBcIjEgOTUwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9raWEtazUtMjAyMS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvdW50cnk6IFwia29yZWFcIixcclxuICAgICAgdHlwZTogXCJzdXZcIixcclxuICAgICAgbW9kZWw6IFwiTGV4dXMgUlg1MDBoXCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQk9C40LHRgNC40LQgfCAyLjXQuyB8INC/0L7Qu9C90YvQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjJcIixcclxuICAgICAgdGFnMjogXCJNNDAwXCIsXHJcbiAgICAgIHByaWNlOiBcIjEgMjAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9sZXh1cy1yeDUwMGguanBnXCIsXHJcbiAgICB9LFxyXG4gICAgLy8gUkVXSUVXU1xyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImFsbFwiLFxyXG4gICAgICB0eXBlOiBcInJld2lld3NcIixcclxuICAgICAgbW9kZWw6IFwiU3ViYXJ1IEZvcmVzdGVyXCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQkdC10L3Qt9C40L0gfCAyLjDQuyB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDE5XCIsXHJcbiAgICAgIHRhZzI6IFwiTkhQMTBcIixcclxuICAgICAgcHJpY2U6IFwiMiA1MDAgMDAwINGA0YPQsVwiLFxyXG4gICAgICBwaG90bzogXCIuLi8uLi9pbWFnZXMvY2FyZHMvX19pdGVtL1N1YmFydUZvcmVzdGVyLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY291bnRyeTogXCJhbGxcIixcclxuICAgICAgdHlwZTogXCJyZXdpZXdzXCIsXHJcbiAgICAgIG1vZGVsOiBcIkhvbmRhIFZlemVsXCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQkdC10L3Qt9C40L0gfCAxLjXQuyB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDE5XCIsXHJcbiAgICAgIHRhZzI6IFwiTkhQMTBcIixcclxuICAgICAgcHJpY2U6IFwiMiA1MDAgMDAwINGA0YPQsVwiLFxyXG4gICAgICBwaG90bzogXCIuLi8uLi9pbWFnZXMvY2FyZHMvX19pdGVtL0hvbmRhVmV6ZWwuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb3VudHJ5OiBcImFsbFwiLFxyXG4gICAgICB0eXBlOiBcInJld2lld3NcIixcclxuICAgICAgbW9kZWw6IFwiVG95b3RhIFZveHlcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCR0LXQvdC30LjQvSB8IDIuMNC7IHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjFcIixcclxuICAgICAgdGFnMjogXCJOSFAxMFwiLFxyXG4gICAgICBwcmljZTogXCIyIDUwMCAwMDAg0YDRg9CxXCIsXHJcbiAgICAgIHBob3RvOiBcIi4uLy4uL2ltYWdlcy9jYXJkcy9fX2l0ZW0vVG95b3RhVm94eS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvdW50cnk6IFwiYWxsXCIsXHJcbiAgICAgIHR5cGU6IFwicmV3aWV3c1wiLFxyXG4gICAgICBtb2RlbDogXCJUb3lvdGEgVm94eVwiLFxyXG4gICAgICBjaGFyYWN0ZXJpc3RpY3M6IFwi0JHQtdC90LfQuNC9IHwgMi4w0LsgfCDQv9C10YDQtdC00L3QuNC5XCIsXHJcbiAgICAgIHRhZzE6IFwiMjAyMVwiLFxyXG4gICAgICB0YWcyOiBcIk5IUDEwXCIsXHJcbiAgICAgIHByaWNlOiBcIjIgNTAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9Ub3lvdGFWb3h5LmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY291bnRyeTogXCJhbGxcIixcclxuICAgICAgdHlwZTogXCJyZXdpZXdzXCIsXHJcbiAgICAgIG1vZGVsOiBcIlRveW90YSBWb3h5XCIsXHJcbiAgICAgIGNoYXJhY3RlcmlzdGljczogXCLQkdC10L3Qt9C40L0gfCAyLjDQuyB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDIxXCIsXHJcbiAgICAgIHRhZzI6IFwiTkhQMTBcIixcclxuICAgICAgcHJpY2U6IFwiMiA1MDAgMDAwINGA0YPQsVwiLFxyXG4gICAgICBwaG90bzogXCIuLi8uLi9pbWFnZXMvY2FyZHMvX19pdGVtL1RveW90YVZveHkuanBnXCIsXHJcbiAgICB9LFxyXG4gICAgLy8gUlVcclxuICAgIHtcclxuICAgICAgY291bnRyeTogXCJjaGluYSBydVwiLFxyXG4gICAgICB0eXBlOiBcImVsZWN0cmljIGhhdGNoYmFja1wiLFxyXG4gICAgICBtb2RlbDogXCJPUkEgR29vZCBDYXRcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCt0LvQtdC60YLRgNC+IHwgMTQxINC7LtGBLiB8INC/0LXRgNC10LTQvdC40LlcIixcclxuICAgICAgdGFnMTogXCIyMDIyXCIsXHJcbiAgICAgIHByaWNlOiBcIjIgNDAwIDAwMCDRgNGD0LFcIixcclxuICAgICAgcGhvdG86IFwiLi4vLi4vaW1hZ2VzL2NhcmRzL19faXRlbS9vcmFnYy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvdW50cnk6IFwicnVcIixcclxuICAgICAgdHlwZTogXCJlbGVjdHJpYyBoYXRjaGJhY2tcIixcclxuICAgICAgbW9kZWw6IFwiQllEIFNlYWd1bGxcIixcclxuICAgICAgY2hhcmFjdGVyaXN0aWNzOiBcItCt0LvQtdC60YLRgNC+IHwgNzQg0Lsu0YEuIHwg0L/QtdGA0LXQtNC90LjQuVwiLFxyXG4gICAgICB0YWcxOiBcIjIwMjJcIixcclxuICAgICAgcHJpY2U6IFwiMiAzMDAgMDAwINGA0YPQsVwiLFxyXG4gICAgICBwaG90bzogXCIuLi8uLi9pbWFnZXMvY2FyZHMvX19pdGVtL2J5ZC1zZWFndWxsLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGNhcmRzSW5Kc29uID0gSlNPTi5zdHJpbmdpZnkoY2FyZHMpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGNhcmRzSW5Kc29uKTtcclxuICBjb25zdCBjYXJkc0Zyb21Kc29uID0gSlNPTi5wYXJzZShjYXJkc0luSnNvbik7XHJcblxyXG4gIGxldCBhbGxXcmFwcGVyQmxvY2tzRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5maWx0ZXJzW2RhdGEtZmlsdGVycy1mb3Itc2xpZGVyXVwiXHJcbiAgKTtcclxuXHJcbiAgYWxsV3JhcHBlckJsb2Nrc0ZpbHRlcnMuZm9yRWFjaCgoYmxvY2tXaXRoRmlsdGVycykgPT4ge1xyXG4gICAgaW5pdGlhbGl6YXRpb25GaWx0ZXIoYmxvY2tXaXRoRmlsdGVycyk7XHJcbiAgICBibG9ja1dpdGhGaWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgaW5pdGlhbGl6YXRpb25GaWx0ZXIoYmxvY2tXaXRoRmlsdGVycylcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemF0aW9uRmlsdGVyKGJsb2NrV2l0aEZpbHRlcnMpIHtcclxuICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdTbGlkZXJOYW1lID0gYmxvY2tXaXRoRmlsdGVycy5kYXRhc2V0LmZpbHRlcnNGb3JTbGlkZXI7XHJcbiAgICBjb25zdCBjb3JyZXNwb25kaW5nU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYFtkYXRhLXNsaWRlci1uYW1lPVwiJHtjb3JyZXNwb25kaW5nU2xpZGVyTmFtZX1cIl1gXHJcbiAgICApO1xyXG4gICAgaWYgKCFjb3JyZXNwb25kaW5nU2xpZGVyKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcclxuICAgICAgICBcIlBsZWFzZSBhZGQgYXR0cmlidXRlIFtkYXRhLXNsaWRlci1uYW1lXSBmb3IgLnNsaWRlci1jYXJkc19fd3JhcHBlci1pdGVtc1wiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjbGVhclNsaWRlcihjb3JyZXNwb25kaW5nU2xpZGVyKTtcclxuXHJcbiAgICBjb25zdCBjYXJkVGVtcGxhdGUgPSBjb3JyZXNwb25kaW5nU2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiI3RlbXBsYXRlLWZvci1jYXItY2FyZFwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgdmFsdWVDdXJyZW50RmlsdGVycyA9XHJcbiAgICAgIGdldFZhbHVlc0N1cnJlbnRseVNlbGVjdGVkRmlsdGVycyhibG9ja1dpdGhGaWx0ZXJzKTtcclxuICAgIGNvbnN0IGNhcmREYXRhRml0c1RoZUZpbHRlciA9IHNlYXJjaERhdGEoXHJcbiAgICAgIHZhbHVlQ3VycmVudEZpbHRlcnMsXHJcbiAgICAgIGNhcmRzRnJvbUpzb25cclxuICAgICk7XHJcblxyXG4gICAgaW5zZXJ0Q2FyZHMoY2FyZERhdGFGaXRzVGhlRmlsdGVyLCBjYXJkVGVtcGxhdGUsIGNvcnJlc3BvbmRpbmdTbGlkZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU2xpZGVyKHNsaWRlcikge1xyXG4gICAgICBzbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXItY2FyZFwiKS5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgICAgIGJsb2NrLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZXNDdXJyZW50bHlTZWxlY3RlZEZpbHRlcnMoYmxvY2tXaXRoRmlsdGVycykge1xyXG4gICAgICBsZXQgYmxvY2tzSW5wdXQgPSBibG9ja1dpdGhGaWx0ZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXSdcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IFtdO1xyXG4gICAgICBibG9ja3NJbnB1dC5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgICAgIGlmIChibG9jay5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBrZXkgPSBibG9jay5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBibG9jay5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgIHNlbGVjdGVkRmlsdGVycy5wdXNoKHsgW2tleV06IHZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzZWxlY3RlZEZpbHRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VhcmNoRGF0YSh2YWx1ZUZpbHRlcnMsIHNvdXJjZSkge1xyXG4gICAgICBjb25zdCBjYXJkc0ZpdHMgPSBzb3VyY2UuZmlsdGVyKChjYXJkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50Rml0cyA9IDA7XHJcblxyXG4gICAgICAgIHZhbHVlRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlcikge1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXJba2V5XSA9PSBjYXJkW2tleV0gPyAoY291bnRGaXRzICs9IDEpIDogKGNvdW50Rml0cyAtPSAxKTtcclxuICAgICAgICAgICAgY2FyZFtrZXldLmluY2x1ZGVzKGZpbHRlcltrZXldKVxyXG4gICAgICAgICAgICAgID8gKGNvdW50Rml0cyArPSAxKVxyXG4gICAgICAgICAgICAgIDogKGNvdW50Rml0cyAtPSAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlRmlsdGVycy5sZW5ndGggPD0gY291bnRGaXRzO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNhcmRzRml0cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnNlcnRDYXJkcyhjYXJkc0RhdGEsIHRlcG1sYXRlLCBjb3JyZXNwb25kaW5nU2xpZGVyKSB7XHJcbiAgICAgIGNhcmRzRGF0YS5mb3JFYWNoKChkYXRhRm9yT25lQ2FyZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrQ2FyZCA9IHRlcG1sYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGFsbEJsb2Nrc0luQ2FyZCA9IGJsb2NrQ2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuICAgICAgICBjb25zdCBwb3N0Zml4RGF0YVRhZyA9IFwibW9kYWxBdXRvXCI7XHJcblxyXG4gICAgICAgIGFsbEJsb2Nrc0luQ2FyZC5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgICAgICAgbGV0IG1hbmFnZUF0dHJpYnV0ZTtcclxuICAgICAgICAgIGZvciAoY29uc3QgbmFtZUF0dHJpYnV0ZSBpbiBibG9jay5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lQXR0cmlidXRlLnN0YXJ0c1dpdGgocG9zdGZpeERhdGFUYWcpKSB7XHJcbiAgICAgICAgICAgICAgbWFuYWdlQXR0cmlidXRlID0gbmFtZUF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKHBvc3RmaXhEYXRhVGFnLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIW1hbmFnZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGF0YUZvck9uZUNhcmRbbWFuYWdlQXR0cmlidXRlXSkge1xyXG4gICAgICAgICAgICBibG9jay5pbm5lckhUTUwgPSBkYXRhRm9yT25lQ2FyZFttYW5hZ2VBdHRyaWJ1dGVdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmxvY2sucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKG1hbmFnZUF0dHJpYnV0ZSA9PSBcInBob3RvXCIpIHtcclxuICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKFwic3JjXCIsIGRhdGFGb3JPbmVDYXJkW21hbmFnZUF0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBibG9ja0NhcmQuY2xhc3NMaXN0LmFkZChcImNhci1jYXJkLS1hZGRcIik7XHJcbiAgICAgICAgY29ycmVzcG9uZGluZ1NsaWRlci5hcHBlbmQoYmxvY2tDYXJkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5ibG9ja0ZpbHRlcmluZygpO1xyXG4iLCJmdW5jdGlvbiBwYWdlc0luUGFnZSgpIHtcclxuICBjb25zdCBtYWluQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwaW5nLXBhZ2VzXCIpO1xyXG4gIGlmIChtYWluQmxvY2sgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdGlhbFBhZ2VJblBhZ2UpO1xyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsUGFnZUluUGFnZSgpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJCbG9ja3MgPSBtYWluQmxvY2sucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuZmxpcHBpbmctcGFnZXNfX3dyYXBwZXItaXRlbXNcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGJsb2NrcyA9IHdyYXBwZXJCbG9ja3MucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNhcmQtd2l0aC1pbmZvXVwiKTtcclxuICAgIHNldFRoZVNlcXVlbmNlTnVtYmVyT25UaGVCbG9ja3MoYmxvY2tzKTtcclxuICAgIGNvbnN0IHRoZU51bWJlck9mQmxvY2tzVmlzaWJsZUF0VGhlU2FtZVRpbWUgPVxyXG4gICAgICBnZXRUaGVOdW1iZXJPZlZpc2libGVCbG9ja3NXaXRob3V0U2Nyb2xsaW5nKGJsb2Nrcyk7XHJcbiAgICBjb25zdCBjb3VudFBhZ2VzID0gTWF0aC5jZWlsKFxyXG4gICAgICBibG9ja3MubGVuZ3RoIC8gdGhlTnVtYmVyT2ZCbG9ja3NWaXNpYmxlQXRUaGVTYW1lVGltZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyQmxvY2tDb250cm9scyA9IG1haW5CbG9jay5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5mbGlwcGluZy1wYWdlc19fd3JhcHBlci1jb250cm9sc1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmFtZUNsYXNzQWRkID0gXCJmbGlwcGluZy1wYWdlc19fY29udHJvbC1pdGVtLS1zZWxlY3RlZFwiO1xyXG4gICAgY29uc3QgY2xvbmVXcmFwcGVyQmxvY2tDb250cm9scyA9IHdyYXBwZXJCbG9ja0NvbnRyb2xzLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBjcmVhdGVCbG9ja3NDb250cm9sKGNsb25lV3JhcHBlckJsb2NrQ29udHJvbHMsIDEpO1xyXG4gICAgc2Nyb2xsV3JhcHBlclRvU2VsZWN0ZWRQYWdlKDEpO1xyXG5cclxuICAgIHdyYXBwZXJCbG9ja0NvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1hbmFnZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFuYWdlKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJsb2NrID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1wYWdlXVwiKTtcclxuICAgICAgaWYgKCF0YXJnZXRCbG9jaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0aGVWYWx1ZU9mVGhlUGFnZUZvclRoZVRyYW5zaXRpb24gPSBOdW1iZXIoXHJcbiAgICAgICAgdGFyZ2V0QmxvY2suZGF0YXNldC5wYWdlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjcmVhdGVCbG9ja3NDb250cm9sKFxyXG4gICAgICAgIGNsb25lV3JhcHBlckJsb2NrQ29udHJvbHMsXHJcbiAgICAgICAgdGhlVmFsdWVPZlRoZVBhZ2VGb3JUaGVUcmFuc2l0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHNjcm9sbFdyYXBwZXJUb1NlbGVjdGVkUGFnZSh0aGVWYWx1ZU9mVGhlUGFnZUZvclRoZVRyYW5zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VGhlU2VxdWVuY2VOdW1iZXJPblRoZUJsb2Nrcyhjb2xsZWN0aW9uT2ZOdW1iZXJpbmdCbG9ja3MpIHtcclxuICAgICAgY29sbGVjdGlvbk9mTnVtYmVyaW5nQmxvY2tzLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGJsb2NrLmRhdGFzZXQubnVtYmVySXRlbSA9IGluZGV4O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFRoZU51bWJlck9mVmlzaWJsZUJsb2Nrc1dpdGhvdXRTY3JvbGxpbmcoYmxvY2tzRm9yQ291bnRpbmcpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2tzRm9yQ291bnRpbmdbMF0ucGFyZW50Tm9kZTtcclxuICAgICAgY29uc3QgdGhlRmlyc3RJbnZpc2libGVFbGVtZW50ID0gQXJyYXkuZnJvbShibG9ja3NGb3JDb3VudGluZykuZmluZEluZGV4KFxyXG4gICAgICAgIChibG9jaykgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBibG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCA+XHJcbiAgICAgICAgICAgIHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgYmxvY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID5cclxuICAgICAgICAgICAgcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHRoZUZpcnN0SW52aXNpYmxlRWxlbWVudCA9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGVGaXJzdEludmlzaWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCbG9ja3NDb250cm9sKGNsb25lUGFyZW50Q29udHJvbHMsIHNlbGVjdGVkTnVtYmVyUGFnZSkge1xyXG4gICAgICBjb25zdCBuYW1lQXR0cmlidXRlID0gXCJkYXRhLXBhZ2VcIjtcclxuICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIGNsb25lUGFyZW50Q29udHJvbHNcclxuICAgICAgICAgIC5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtuYW1lQXR0cmlidXRlfV1gKVxyXG4gICAgICApLm1hcCgoYmxvY2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlRm9yVGhlUGFnZU51bWJlciA9IGJsb2NrLmdldEF0dHJpYnV0ZShuYW1lQXR0cmlidXRlKTtcclxuICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZUZvclRoZVBhZ2VOdW1iZXIpIHtcclxuICAgICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUobmFtZUF0dHJpYnV0ZSwgXCIxXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIFwicHJldmlvdXNcIjpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTnVtYmVyUGFnZSAtIDEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKG5hbWVBdHRyaWJ1dGUsIFwiMVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUobmFtZUF0dHJpYnV0ZSwgYCR7c2VsZWN0ZWROdW1iZXJQYWdlIC0gMX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJUb0dvVG8gPSBpbmRleCAtIDIgKyBzZWxlY3RlZE51bWJlclBhZ2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVyQmxvY2tGb3JUZXh0ID0gYmxvY2sucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcblxyXG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKG5hbWVDbGFzc0FkZCk7XHJcbiAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZShuYW1lQXR0cmlidXRlLCBwYWdlTnVtYmVyVG9Hb1RvKTtcclxuICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCLQodGC0YDQsNC90LjRhtCwIFwiICsgcGFnZU51bWJlclRvR29Ubyk7XHJcbiAgICAgICAgICAgIGlubmVyQmxvY2tGb3JUZXh0LmlubmVySFRNTCA9IHBhZ2VOdW1iZXJUb0dvVG87XHJcblxyXG4gICAgICAgICAgICBpZiAocGFnZU51bWJlclRvR29UbyA+IGNvdW50UGFnZXMpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFnZU51bWJlclRvR29UbyA9PSBzZWxlY3RlZE51bWJlclBhZ2UpIHtcclxuICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKG5hbWVDbGFzc0FkZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDYgJiYgcGFnZU51bWJlclRvR29UbyArIDIgPCBjb3VudFBhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKG5hbWVBdHRyaWJ1dGUsIGAke3BhZ2VOdW1iZXJUb0dvVG8gKyA2fWApO1xyXG4gICAgICAgICAgICAgIGlubmVyQmxvY2tGb3JUZXh0LmlubmVySFRNTCA9IGAke3BhZ2VOdW1iZXJUb0dvVG8gKyA2fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDYgJiYgcGFnZU51bWJlclRvR29UbyArIDYgPiBjb3VudFBhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKG5hbWVBdHRyaWJ1dGUsIGAke3BhZ2VOdW1iZXJUb0dvVG99YCk7XHJcbiAgICAgICAgICAgICAgaW5uZXJCbG9ja0ZvclRleHQuaW5uZXJIVE1MID0gYCR7cGFnZU51bWJlclRvR29Ub31gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJuZXh0XCI6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE51bWJlclBhZ2UgKyAxID49IGNvdW50UGFnZXMpIHtcclxuICAgICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUobmFtZUF0dHJpYnV0ZSwgY291bnRQYWdlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKG5hbWVBdHRyaWJ1dGUsIGAke3NlbGVjdGVkTnVtYmVyUGFnZSArIDF9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUobmFtZUF0dHJpYnV0ZSwgY291bnRQYWdlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJtb3JlXCI6XHJcbiAgICAgICAgICAgIGlmIChjb3VudFBhZ2VzIDwgNSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE51bWJlclBhZ2UgKyA0ID4gY291bnRQYWdlcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG8gbm90IHNlcmFjaGluZyBbZGF0YS1wYWdlXSFcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd3JhcHBlckJsb2NrQ29udHJvbHMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgYXJyYXkuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICAgIHdyYXBwZXJCbG9ja0NvbnRyb2xzLmFwcGVuZChibG9jayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsV3JhcHBlclRvU2VsZWN0ZWRQYWdlKHNlbGV0ZWROdW1iZXJQYWdlKSB7XHJcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVGb3JEaXNwbGF5aW5nVGhlTGFzdFBhZ2UgPSBcImRhdGEtc3R5bGVzLWZvci1sYXN0LXBhZ2VcIjtcclxuICAgICAgY29uc3QgbnVtYmVyRmlyc3RCbG9ja3NGb3JTaG93aW5nID1cclxuICAgICAgICAoc2VsZXRlZE51bWJlclBhZ2UgLSAxKSAqIHRoZU51bWJlck9mQmxvY2tzVmlzaWJsZUF0VGhlU2FtZVRpbWU7XHJcbiAgICAgIGNvbnN0IG51bWJlckxhc3RQYWdlID0gY291bnRQYWdlcztcclxuXHJcbiAgICAgIHNob3dBbGxCbG9ja3MoYmxvY2tzKTtcclxuICAgICAgc2Nyb2xsVG9TZWxlY3RlZFBhZ2UoYmxvY2tzKTtcclxuICAgICAgaGlkZUJsb2Nrc09uTGFzdFBhZ2UoYmxvY2tzKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNob3dBbGxCbG9ja3MoYmxvY2tzKSB7XHJcbiAgICAgICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiAoYmxvY2suc3R5bGUuZGlzcGxheSA9IG51bGwpKTtcclxuICAgICAgICB3cmFwcGVyQmxvY2tzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lRm9yRGlzcGxheWluZ1RoZUxhc3RQYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBzY3JvbGxUb1NlbGVjdGVkUGFnZShibG9ja3MpIHtcclxuICAgICAgICBpZiAoc2VsZXRlZE51bWJlclBhZ2UgPT0gMSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICBpbmxpbmU6IFwic3RhcnRcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBibG9ja3NbbnVtYmVyRmlyc3RCbG9ja3NGb3JTaG93aW5nXS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCIsXHJcbiAgICAgICAgICBpbmxpbmU6IFwic3RhcnRcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBoaWRlQmxvY2tzT25MYXN0UGFnZShibG9ja3MpIHtcclxuICAgICAgICBpZiAobnVtYmVyTGFzdFBhZ2UgPT0gc2VsZXRlZE51bWJlclBhZ2UpIHtcclxuICAgICAgICAgIHdyYXBwZXJCbG9ja3Muc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWVGb3JEaXNwbGF5aW5nVGhlTGFzdFBhZ2UsIFwiXCIpO1xyXG4gICAgICAgICAgYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBudW1iZXJGaXJzdEJsb2Nrc0ZvclNob3dpbmcpIHtcclxuICAgICAgICAgICAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgcmV0dXJuO1xyXG59XHJcbnBhZ2VzSW5QYWdlKCk7XHJcbiIsImZ1bmN0aW9uIHRlcG1wbGF0ZXNGb3JGbGlwcGluZ1BhZ2VzKCkge1xyXG4gIGNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcHBpbmctcGFnZXNcIik7XHJcblxyXG4gIGlmIChtYWluQmxvY2sgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd3JhcHBlckJsb2NrUGFnZXMgPSBtYWluQmxvY2sucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmZsaXBwaW5nLXBhZ2VzX193cmFwcGVyLWl0ZW1zXCJcclxuICApO1xyXG4gIGNvbnN0IHNvdXJjZUJsb2NrcyA9IHdyYXBwZXJCbG9ja1BhZ2VzLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIltkYXRhLWNhcmQtd2l0aC1pbmZvXVwiXHJcbiAgKTtcclxuICBpZiAoIXNvdXJjZUJsb2Nrcykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBjbG9uZXNTb3VyY2VCbG9ja3MgPSBBcnJheS5mcm9tKHNvdXJjZUJsb2NrcykubWFwKChibG9jaykgPT4ge1xyXG4gICAgcmV0dXJuIGJsb2NrLmNsb25lTm9kZSh0cnVlKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb2JzZXJ2ZXJGb3JXcmFwcGVyQmxvY2tQYWdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGluc2VydENhcmRzKTtcclxuICBvYnNlcnZlckZvcldyYXBwZXJCbG9ja1BhZ2VzLm9ic2VydmUod3JhcHBlckJsb2NrUGFnZXMsIHtcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRoZU51bWJlck9mSW5zZXJ0cyA9IDQwO1xyXG5cclxuICBpbnNlcnRDYXJkcyh0aGVOdW1iZXJPZkluc2VydHMsIGNsb25lc1NvdXJjZUJsb2Nrcyk7XHJcblxyXG4gIGZ1bmN0aW9uIGluc2VydENhcmRzKHRoZU51bWJlck9mSW5zZXJ0cywgYmxvY2tGb3JJbnNlcnQpIHtcclxuICAgIGlmICghd3JhcHBlckJsb2NrUGFnZXMucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNhcmQtd2l0aC1pbmZvXVwiKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoZU51bWJlck9mSW5zZXJ0czsgaW5kZXgrKykge1xyXG4gICAgICBibG9ja0Zvckluc2VydC5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgICAgIHdyYXBwZXJCbG9ja1BhZ2VzLmFwcGVuZChibG9jay5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxudGVwbXBsYXRlc0ZvckZsaXBwaW5nUGFnZXMoKTtcclxuIiwiLy8gZnVuY3Rpb24gbWFpblNsaWRlcigpIHtcclxuLy8gICAgIGxldCBtYWluQmxvY2tTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zbGlkZXInKVxyXG4vLyAgICAgaWYgKCFtYWluQmxvY2tTbGlkZXIpIHtcclxuLy8gICAgICAgICByZXR1cm5cclxuLy8gICAgIH1cclxuLy8gICAgIGNvbnN0IGJsb2NrRnJhbWVGb3JJdGVtcyA9IG1haW5CbG9ja1NsaWRlci5xdWVyeVNlbGVjdG9yKCcubWFpbi1zbGlkZXJfX2l0ZW1zJylcclxuLy8gICAgIGNvbnN0IHNsaWRlckl0ZW1zID0gYmxvY2tGcmFtZUZvckl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNsaWRlcl9faXRlbScpXHJcbi8vICAgICBjb25zdCBzbGlkZXJCbG9ja1dyYXBwZXJDb250cm9scyA9IG1haW5CbG9ja1NsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zbGlkZXJfX2NvbnRyb2xzJylbMF1cclxuLy8gICAgIGxldCBzbGlkZXJDb250cm9scyA9IHNsaWRlckJsb2NrV3JhcHBlckNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNsaWRlcl9fY29udHJvbC1pdGVtJylcclxuXHJcbi8vICAgICBjcmVhdGVDb250cm9sc0ZvclNsaWRlcigpXHJcblxyXG4vLyAgICAgbWFpbkJsb2NrU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGluaXRpYWxpemF0aW9uQ29udHJvbClcclxuXHJcbi8vICAgICBmdW5jdGlvbiBjcmVhdGVDb250cm9sc0ZvclNsaWRlcigpIHtcclxuXHJcbi8vICAgICAgICAgbGV0IHRlbXBsYXRlQ29udHJvbCA9IGNvcHlCbG9ja1dpdGhTbGlkZXJDb250cm9sKClcclxuLy8gICAgICAgICB0ZW1wbGF0ZUNvbnRyb2wucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgY2xlYXJCbG9ja3NDb250cm9sKClcclxuLy8gICAgICAgICBhZGRUZW1wbGF0ZXNJblNsaWRlcigpXHJcbi8vICAgICAgICAgZmlyc3RDb250cm9sc0VsZW1lbnRDaGVrZWQoKVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGNvcHlCbG9ja1dpdGhTbGlkZXJDb250cm9sKCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gc2xpZGVyQ29udHJvbHNbMF0uY2xvbmVOb2RlKHRydWUpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGNsZWFyQmxvY2tzQ29udHJvbCgpIHtcclxuLy8gICAgICAgICAgICAgc2xpZGVyQmxvY2tXcmFwcGVyQ29udHJvbHMuaW5uZXJIVE1MPSAnJ1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBmdW5jdGlvbiBhZGRUZW1wbGF0ZXNJblNsaWRlcigpIHtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIHNsaWRlckl0ZW1zLmZvckVhY2goKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlRm9yVXNlSW5IVE1MID0gdGVtcGxhdGVDb250cm9sLmNsb25lTm9kZSgpXHJcbi8vICAgICAgICAgICAgICAgICBzbGlkZXJCbG9ja1dyYXBwZXJDb250cm9scy5hcHBlbmQodmFyaWFibGVGb3JVc2VJbkhUTUwpXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBmdW5jdGlvbiBmaXJzdENvbnRyb2xzRWxlbWVudENoZWtlZCgpIHtcclxuLy8gICAgICAgICAgICAgbGV0IGNvbnRyb2xCbG9jayA9IHNsaWRlckJsb2NrV3JhcHBlckNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNsaWRlcl9fY29udHJvbC1pdGVtJylcclxuLy8gICAgICAgICAgICAgY29udHJvbEJsb2NrLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpXHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGZ1bmN0aW9uIGluaXRpYWxpemF0aW9uQ29udHJvbCgpIHtcclxuXHJcbi8vICAgICAgICAgdXBkYXRlSGF2aW5nQ29udHJvbHMoKVxyXG5cclxuLy8gICAgICAgICBsZXQgZXZlbnRDb250cm9sID0gZXZlbnQudGFyZ2V0XHJcbi8vICAgICAgICAgc2xpZGVyQ29udHJvbHMuZm9yRWFjaCgoY29udHJvbEVsZW1lbnQsIGNvbnRyb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgaWYgKGV2ZW50Q29udHJvbCA9PSBjb250cm9sRWxlbWVudCkge1xyXG4vLyAgICAgICAgICAgICAgICAgc2xpZGVySXRlbXMuZm9yRWFjaCgoaXRlbSwgaXRlbUluZGV4KT0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbEluZGV4ID09IGl0ZW1JbmRleCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpbmdJdGVtKGl0ZW0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgZnVuY3Rpb24gdXBkYXRlSGF2aW5nQ29udHJvbHMoKSB7XHJcbi8vICAgICAgICAgICAgIHNsaWRlckNvbnRyb2xzID0gc2xpZGVyQmxvY2tXcmFwcGVyQ29udHJvbHMucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tc2xpZGVyX19jb250cm9sLWl0ZW0nKVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgZnVuY3Rpb24gbW92aW5nSXRlbShpdGVtKSB7XHJcbi8vICAgICAgICAgICAgIGl0ZW0uc2Nyb2xsSW50b1ZpZXcoe1xyXG4vLyAgICAgICAgICAgICAgICAgYmxvY2s6ICduZWFyZXN0JyxcclxuLy8gICAgICAgICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxyXG4vLyAgICAgICAgICAgICAgICAgYmVoYWl2b3I6ICdzbW9vdGgnXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBtYWluU2xpZGVyKClcclxuLy8gZXhwb3J0IHttYWluU2xpZGVyfVxyXG5cclxuZnVuY3Rpb24gbWFpblNsaWRlcigpIHtcclxuICAvLyByZXR1cm5cclxuICAgIGxldCBtYWluQmxvY2tTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zbGlkZXInKVxyXG4gICAgaWYgKCFtYWluQmxvY2tTbGlkZXIpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGJsb2NrV3JhcHBlckZvckl0ZW1zID0gbWFpbkJsb2NrU2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNsaWRlcl9faXRlbXMnKVxyXG4gICAgY29uc3Qgc2xpZGVySXRlbXMgPSBibG9ja1dyYXBwZXJGb3JJdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zbGlkZXJfX2l0ZW0nKVxyXG4gICAgY29uc3QgYmxvY2tXcmFwcGVyQ29udHJvbHMgPSBtYWluQmxvY2tTbGlkZXIucXVlcnlTZWxlY3RvcignLm1haW4tc2xpZGVyX19jb250cm9scycpXHJcblxyXG4gICAgY3JlYXRlQ29udHJvbHMoKVxyXG5cclxuICAgIGJsb2NrV3JhcHBlckNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJld2luZFNsaWRlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJld2luZFNsaWRlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2NrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgY29uc3Qgb3JkZXJOdW1iZXJJdGVtSW5TbGlkZXIgPSBibG9ja1RhcmdldC5nZXRBdHRyaWJ1dGUoJ2Zvci1pdGVtLW51bWJlcicpXHJcblxyXG4gICAgICAgIG1vdmluZ0l0ZW0ob3JkZXJOdW1iZXJJdGVtSW5TbGlkZXIpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmluZ0l0ZW0ob3JkZXJOdW1iZXIpIHtcclxuICAgICAgICAgICAgc2xpZGVySXRlbXNbb3JkZXJOdW1iZXJdLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmU6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgIGJlaGFpdm9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udHJvbHMoKSB7XHJcbiAgICAgICAgY29uc3QgY2xvbmVCbG9jayA9IGdldENsb25lQ29udHJvbHMoYmxvY2tXcmFwcGVyQ29udHJvbHMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xlYXJPbGRDb250cm9scyhibG9ja1dyYXBwZXJDb250cm9scylcclxuICAgICAgICBhZGRUaGVSZXF1aXJlZE51bWJlck9mQmxvY2tzKGNsb25lQmxvY2spXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb25lQ29udHJvbHMod3JhcHBlckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2tDb250cm9sID0gd3JhcHBlckNvbnRyb2wucXVlcnlTZWxlY3RvcignLm1haW4tc2xpZGVyX19jb250cm9scy1pdGVtJylcclxuICAgICAgICAgICAgcmV0dXJuIGJsb2NrQ29udHJvbC5jbG9uZU5vZGUodHJ1ZSkgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGVhck9sZENvbnRyb2xzKHdyYXBwZXJDb250cm9scykge1xyXG4gICAgICAgICAgICB3cmFwcGVyQ29udHJvbHMuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRoZVJlcXVpcmVkTnVtYmVyT2ZCbG9ja3ModGVtcGxhdGVCbG9jaykge1xyXG4gICAgICAgICAgICBzbGlkZXJJdGVtcy5mb3JFYWNoKChzbGlkZXJJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVUZW1wbGF0ZUJsb2NrID0gdGVtcGxhdGVCbG9jay5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldEJsb2NrQXR0cmlidXRlcyhjbG9uZVRlbXBsYXRlQmxvY2ssIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgYmxvY2tXcmFwcGVyQ29udHJvbHMuYXBwZW5kKGNsb25lVGVtcGxhdGVCbG9jayk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCbG9ja0F0dHJpYnV0ZXMoYmxvY2ssIG9yZGVyTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGJsb2NrLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXHJcbiAgICAgICAgICAgIGlmIChvcmRlck51bWJlciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBibG9jay5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gYmxvY2suc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdmb3ItaXRlbS1udW1iZXInLCBgJHtvcmRlck51bWJlcn1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5tYWluU2xpZGVyKCkiLCJmdW5jdGlvbiBvcGVuQW5kQ2xvc2VQb3B1bGFyTWVudSgpIHtcclxuICAgIGNvbnN0IHBvcHVsYXJNZW51QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wb3B1bGFyJylcclxuICAgIFxyXG4gICAgaWYgKCFjaGVja2luZ0Jsb2NrQXZhaWxhYmlsaXR5KCkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHBvcHVsYXJNZW51QnV0dG9uT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1dHRvbi1tZW51JylcclxuICAgIGNvbnN0IHBvcHVsYXJNZW51QnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wb3B1bGFyX19jbG9zZS1tZW51JylcclxuXHJcbiAgICBzZXREZWZhdWx0UG9zaXRpb24oKVxyXG5cclxuICAgIHBvcHVsYXJNZW51QnV0dG9uT3Blbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93QmxvY2spXHJcbiAgICBwb3B1bGFyTWVudUJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhpZGVCbG9jaylcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja2luZ0Jsb2NrQXZhaWxhYmlsaXR5KCkge1xyXG4gICAgICAgIGlmIChwb3B1bGFyTWVudUJsb2NrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBibG9jayBcIm1lbnUtcG9wdWxhclwiIScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZWZhdWx0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcG9wdWxhck1lbnVCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBvcHVsYXItLXNob3cnKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dCbG9jaygpIHtcclxuICAgICAgICBwb3B1bGFyTWVudUJsb2NrLmNsYXNzTGlzdC5hZGQoJ21lbnUtcG9wdWxhci0tc2hvdycpXHJcbiAgICAgICAgbG9ja0FuZFVubG9ja1Njcm9sbEJvZHkodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlQmxvY2soKSB7XHJcbiAgICAgICAgc2V0RGVmYXVsdFBvc2l0aW9uKClcclxuICAgICAgICBsb2NrQW5kVW5sb2NrU2Nyb2xsQm9keShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2NrQW5kVW5sb2NrU2Nyb2xsQm9keShzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5vcGVuQW5kQ2xvc2VQb3B1bGFyTWVudSgpXHJcbi8vIGV4cG9ydCB7b3BlbkFuZENsb3NlUG9wdWxhck1lbnV9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IHtvcGVuQW5kQ2xvc2VQb3B1bGFyTWVudX1cclxuIiwiZnVuY3Rpb24gbW9kYWxXaW5kb3coKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtYW5hZ2VNb2RhbFdpbmRvdyk7XHJcblxyXG4gIGNvbnN0IG5hbWVBdHRyaWJ1dGVGb3JPcGVuaW5nID0gXCJkYXRhLW9wZW4tbW9kYWwtd2luZG93XCI7XHJcbiAgY29uc3QgbW9kYWxXaW5kb3dBdHRyaWJ1dGUgPSBcImRhdGEtbW9kYWwtd2luZG93XCI7XHJcbiAgY29uc3Qgc2VsZWN0b3JJbm5lcldyYXBNb2RhbCA9IFwiLm1vZGFsLW9yZGVyLXNpbWlsYXJfX2lubmVyXCI7XHJcbiAgY29uc3Qgc2VsZWN0b3JCbG9ja1dpdGhJbmZvID0gXCJbZGF0YS1jYXJkLXdpdGgtaW5mb11cIjtcclxuICBjb25zdCBwcmVmaXhGb3JEYXRhQXR0cmlidXRlID0gXCJtb2RhbFwiO1xyXG5cclxuICBmdW5jdGlvbiBtYW5hZ2VNb2RhbFdpbmRvdyhldmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0QmxvY2sgPSBjaGVja1RhcmdldEJsb2NrKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIXRhcmdldEJsb2NrKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0QmxvY2suY2xvc2VzdChgJHtzZWxlY3RvcklubmVyV3JhcE1vZGFsfWApKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0QmxvY2suY2xvc2VzdChgWyR7bmFtZUF0dHJpYnV0ZUZvck9wZW5pbmd9XWApKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsQmxvY2sgPSBnZXRCbG9ja1dpdGhNb2RhbChldmVudCk7XHJcbiAgICAgIGlmICghbW9kYWxCbG9jaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGVyZSBpcyBubyBtb2RhbCB3aW5kb3cgd2l0aCB0aGF0IG5hbWU6YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBldmVudC50YXJnZXRcclxuICAgICAgICAgICAgLmNsb3Nlc3QoYFske25hbWVBdHRyaWJ1dGVGb3JPcGVuaW5nfV1gKVxyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKGAke25hbWVBdHRyaWJ1dGVGb3JPcGVuaW5nfWApXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJhbnNmZXJEYXRhRnJvbVRhcmdldEJsb2NrKHRhcmdldEJsb2NrLCBtb2RhbEJsb2NrKTtcclxuICAgICAgb3Blbk1vZGFsKG1vZGFsQmxvY2spO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXRCbG9jay5jbG9zZXN0KGBbJHttb2RhbFdpbmRvd0F0dHJpYnV0ZX1dYCkpIHtcclxuICAgICAgY29uc3QgbW9kYWxCbG9jayA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY2xvc2VNb2RhbChtb2RhbEJsb2NrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYW4gdW5oYW5kbGVkIGV2ZW50IGZyb20gdGhlIGJsb2NrOlwiKTtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0QmxvY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tUYXJnZXRCbG9jayhldmVudCkge1xyXG4gICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jbG9zZXN0KGBbJHtuYW1lQXR0cmlidXRlRm9yT3BlbmluZ31dYClcclxuICAgICAgPyBldmVudC50YXJnZXRcclxuICAgICAgOiBldmVudC50YXJnZXQuY2xvc2VzdChgWyR7bW9kYWxXaW5kb3dBdHRyaWJ1dGV9XWApXHJcbiAgICAgID8gZXZlbnQudGFyZ2V0XHJcbiAgICAgIDogZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYCR7c2VsZWN0b3JJbm5lcldyYXBNb2RhbH1gKVxyXG4gICAgICA/IGV2ZW50LnRhcmdldFxyXG4gICAgICA6IGZhbHNlO1xyXG5cclxuICAgIC8vIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgLy8gICBjYXNlICEhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYFske25hbWVBdHRyaWJ1dGVGb3JPcGVuaW5nfV1gKTpcclxuICAgIC8vICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gICBjYXNlICEhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYFske21vZGFsV2luZG93QXR0cmlidXRlfV1gKTpcclxuICAgIC8vICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gICBjYXNlICEhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYCR7c2VsZWN0b3JJbm5lcldyYXBNb2RhbH1gKTpcclxuICAgIC8vICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gICBkZWZhdWx0OlxyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbEJsb2NrKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtbG9ja1wiKTtcclxuICAgIG1vZGFsQmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsIChldmVudCkgPT5cclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLWxvY2tcIilcclxuICAgICk7XHJcbiAgICBtb2RhbEJsb2NrLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbEJsb2NrKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGwtbG9ja1wiKTtcclxuICAgIG1vZGFsQmxvY2suY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJsb2NrV2l0aE1vZGFsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBibG9ja1dpdGhOYW1lTW9kYWxXaW5kb3cgPSBldmVudC50YXJnZXQuY2xvc2VzdChcclxuICAgICAgYFske25hbWVBdHRyaWJ1dGVGb3JPcGVuaW5nfV1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmFtZU1vZGFsV2luZG93ID0gYmxvY2tXaXRoTmFtZU1vZGFsV2luZG93LmdldEF0dHJpYnV0ZShcclxuICAgICAgbmFtZUF0dHJpYnV0ZUZvck9wZW5pbmdcclxuICAgICk7XHJcbiAgICBjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGBbJHttb2RhbFdpbmRvd0F0dHJpYnV0ZX09JyR7bmFtZU1vZGFsV2luZG93fSddYFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbW9kYWxXaW5kb3c7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFuc2ZlckRhdGFGcm9tVGFyZ2V0QmxvY2sodGFyZ2V0QmxvY2ssIG1vZGFsQmxvY2spIHtcclxuICAgIGNvbnN0IGNhcmRXaXRoSW5mbyA9IHRhcmdldEJsb2NrLmNsb3Nlc3QoYCR7c2VsZWN0b3JCbG9ja1dpdGhJbmZvfWApO1xyXG5cclxuICAgIGlmICghY2FyZFdpdGhJbmZvKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbGxCbG9ja3NJbk1vZGFsQmxvY2sgPSBtb2RhbEJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG4gICAgLy8gYWxsQmxvY2tzRm9ySW5zZXJ0aW5nRGF0YS5cclxuICAgIGNvbnN0IGFsbEJsb2Nrc0Zvckluc2VydGluZ0RhdGEgPSBzZWFyY2hCbG9ja3NXaXRoSW5mbyhcclxuICAgICAgYWxsQmxvY2tzSW5Nb2RhbEJsb2NrXHJcbiAgICApO1xyXG5cclxuICAgIGluc2VydGluZ0RhdGFJbnRvTW9kYWxCbG9jayhhbGxCbG9ja3NGb3JJbnNlcnRpbmdEYXRhLCBjYXJkV2l0aEluZm8pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluc2VydGluZ0RhdGFJbnRvTW9kYWxCbG9jayhcclxuICAgICAgYWxsQmxvY2tzRm9ySW5zZXJ0aW5nRGF0YSxcclxuICAgICAgY2FyZFdpdGhJbmZvXHJcbiAgICApIHtcclxuICAgICAgYWxsQmxvY2tzRm9ySW5zZXJ0aW5nRGF0YS5mb3JFYWNoKChibG9ja0Zvckluc2VydGluZ0RhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBhbGxBdHRyaWJ1dGVzSW5CbG9jayA9IGJsb2NrRm9ySW5zZXJ0aW5nRGF0YS5hdHRyaWJ1dGVzO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhbGxBdHRyaWJ1dGVzSW5CbG9jaykge1xyXG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZS5uYW1lLnN0YXJ0c1dpdGgoYGRhdGEtJHtwcmVmaXhGb3JEYXRhQXR0cmlidXRlfWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrV2l0aERhdGFTb3VyY2UgPSBjYXJkV2l0aEluZm8ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBgWyR7YXR0cmlidXRlLm5hbWV9XWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYmxvY2tXaXRoRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgIHNldFRoZUJsb2NrVmlzaWJpbGl0eVRhZyhibG9ja0Zvckluc2VydGluZ0RhdGEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGhlQmxvY2tWaXNpYmlsaXR5VGFnKGJsb2NrRm9ySW5zZXJ0aW5nRGF0YSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhU291cmNlID0gYmxvY2tXaXRoRGF0YVNvdXJjZS5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YVNvdXJjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc291cmNlU3JjVGFnSW1hZ2UgPSBibG9ja1dpdGhEYXRhU291cmNlLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgICAgICAgICAgICBibG9ja0Zvckluc2VydGluZ0RhdGEuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3NvdXJjZVNyY1RhZ0ltYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBibG9ja0Zvckluc2VydGluZ0RhdGEuaW5uZXJIVE1MID0gZGF0YVNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFRoZUJsb2NrVmlzaWJpbGl0eVRhZyhibG9jaywgc3RhdGUpIHtcclxuICAgICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3ctYmxvY2tcIiwgYCR7c3RhdGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2hCbG9ja3NXaXRoSW5mbyhhbGxCbG9ja3NJbkNhcmQpIHtcclxuICAgICAgY29uc3QgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgYWxsQmxvY2tzSW5DYXJkKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGJsb2NrLmRhdGFzZXQ7XHJcbiAgICAgICAgaWYgKGNoZWNrQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSkge1xyXG4gICAgICAgICAgcmVzdWx0QXJyYXkucHVzaChibG9jayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZS5zdGFydHNXaXRoKHByZWZpeEZvckRhdGFBdHRyaWJ1dGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0QXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm1vZGFsV2luZG93KCk7XHJcbi8vIGV4cG9ydCB7bW9kYWxXaW5kb3d9XHJcbiIsImZ1bmN0aW9uIHBvcHVwTWVudU5hdigpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbmF2TWVudUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgb3Blbk1lbnUpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNsb3NlTWVudSlcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYmxvY2tUYXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm5hdl9fd3JhcHBlci1saW5rcycpXHJcbiAgICAgICAgaWYgKCFibG9ja1RhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdk1lbnUgPSBibG9ja1RhcmdldC5xdWVyeVNlbGVjdG9yKCcubmF2X19wb3B1cC1tZW51JylcclxuICAgICAgICBpZiAoIW5hdk1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2X19wb3B1cC1tZW51LS1vcGVuJylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2NrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5uYXZfX3dyYXBwZXItbGlua3MnKVxyXG4gICAgICAgIGlmICghYmxvY2tUYXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBibG9ja1BvcHVwTWVudSA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xvc2VzdCgnLm5hdl9fcG9wdXAtbWVudScpXHJcbiAgICAgICAgaWYgKGJsb2NrUG9wdXBNZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvcHVwQmxvY2tzID0gbmF2TWVudUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX3BvcHVwLW1lbnUnKVxyXG5cclxuICAgICAgICBjdXJyZW50UG9wdXBCbG9ja3MuZm9yRWFjaChibG9ja01lbnVQb3B1cCA9PiB7XHJcbiAgICAgICAgICAgIGJsb2NrTWVudVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fcG9wdXAtbWVudS0tb3BlbicpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5wb3B1cE1lbnVOYXYoKSIsImZ1bmN0aW9uIHNjcm9sbFRvVG9wUGFnZSgpIHtcclxuXHJcbiAgICBjb25zdCBidXR0b25zRm9yU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9uLXNjcmVlbi1uYXZpZ2F0aW9uJylcclxuXHJcbiAgICBidXR0b25zRm9yU2Nyb2xsLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxUb1RvcClcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG59XHJcbnNjcm9sbFRvVG9wUGFnZSgpIiwiZnVuY3Rpb24gZmxpcHBpbmdTbGlkZXIoKSB7XHJcbiAgY29uc3QgYWxsQmxvY2tzQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5zbGlkZXItY2FyZHNfX3dyYXBwZXItZm9yLWNvbnRyb2xzXCJcclxuICApO1xyXG5cclxuICBhbGxCbG9ja3NDb250cm9sLmZvckVhY2goKGJsb2NrV3JhcHBlciwgaW5kZXgpID0+IHtcclxuICAgIGluaXRpYWxpemF0aW9uRmxpcHBpbmdTbGlkZXIoYmxvY2tXcmFwcGVyKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6YXRpb25GbGlwcGluZ1NsaWRlcihibG9ja1dyYXBwZXIpIHtcclxuICAgIGNvbnN0IHdyYXBwZXJDb250cm9scyA9IGJsb2NrV3JhcHBlcjtcclxuICAgIGNvbnN0IGNvbnRyb2xQcmV2aW91cyA9IHdyYXBwZXJDb250cm9scy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5zbGlkZXItY2FyZHNfX2NvbnRyb2wtcHJldmlvdXNcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbnRyb2xOZXh0ID0gd3JhcHBlckNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLnNsaWRlci1jYXJkc19fY29udHJvbC1uZXh0XCJcclxuICAgICk7XHJcblxyXG4gICAgbGV0IGNvcnJlc3BvbmRpbmdTbGlkZXIgPSBnZXRDb3JyZXNwb25kaW5nU2xpZGVyKCk7XHJcbiAgICBsZXQgY3VycmVudENvcnJlc3BvbmRpbmdTbGlkZXJJdGVtcyA9IGdldFNsaWRlckl0ZW1zKCk7XHJcbiAgICBsZXQgY3VycmVudE9yZGluYWxOdW1iZXI7XHJcblxyXG4gICAgbGV0IG9ic2VydmVyRm9yU2xpZGVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodXBkYXRlU2xpZGVyKTtcclxuICAgIG9ic2VydmVyRm9yU2xpZGVyLm9ic2VydmUoY29ycmVzcG9uZGluZ1NsaWRlciwge1xyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250cm9sUHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbWFuYWdlKTtcclxuICAgIGNvbnRyb2xOZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1hbmFnZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdXBkYXRlU2xpZGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb3JyZXNwb25kaW5nU2xpZGVyKCkge1xyXG4gICAgICBsZXQgd3JhcHBlclNsaWRlciA9IHdyYXBwZXJDb250cm9scy5jbG9zZXN0KFwiLnNsaWRlci1jYXJkc1wiKTtcclxuICAgICAgbGV0IHNsaWRlckJsb2NrID0gd3JhcHBlclNsaWRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2xpZGVyLW5hbWVdXCIpO1xyXG4gICAgICBpZiAoIXNsaWRlckJsb2NrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBcIlBsZWFzZSBhZGQgYXR0cmlidXRlIFtkYXRhLXNsaWRlci1uYW1lXSBmb3IgY2FyZHMgd3JhcHBlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2xpZGVyQmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2xpZGVySXRlbXMoKSB7XHJcbiAgICAgIHJldHVybiBjb3JyZXNwb25kaW5nU2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jYXJkLXdpdGgtaW5mb11cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xyXG4gICAgICBjdXJyZW50Q29ycmVzcG9uZGluZ1NsaWRlckl0ZW1zID0gZ2V0U2xpZGVySXRlbXMoKTtcclxuICAgICAgY3VycmVudE9yZGluYWxOdW1iZXIgPSAwO1xyXG4gICAgICBzZXRTZXJpYWxOdW1iZXJBdHRyaWJ1dGUoY3VycmVudENvcnJlc3BvbmRpbmdTbGlkZXJJdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFuYWdlKCkge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGNvbnRyb2xQcmV2aW91cykge1xyXG4gICAgICAgIHNldE5ld0N1cnJlbnRPcmRpbmFsTnVtYmVyKFwicHJldmlvdXNcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBjb250cm9sTmV4dCkge1xyXG4gICAgICAgIHNldE5ld0N1cnJlbnRPcmRpbmFsTnVtYmVyKFwibmV4dFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbW92aW5nU2xpZGVyKGN1cnJlbnRDb3JyZXNwb25kaW5nU2xpZGVySXRlbXNbY3VycmVudE9yZGluYWxOdW1iZXJdKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNldE5ld0N1cnJlbnRPcmRpbmFsTnVtYmVyKGRpcmVjdGlvbk9mTW92ZW1lbnQpIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uT2ZNb3ZlbWVudCA9PSBcInByZXZpb3VzXCIpIHtcclxuICAgICAgICAgIGN1cnJlbnRPcmRpbmFsTnVtYmVyLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudE9yZGluYWxOdW1iZXIgPCAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gKGN1cnJlbnRPcmRpbmFsTnVtYmVyID0gMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2V0VGhlUmVzdE9mVGhlU2Nyb2xsKGNvcnJlc3BvbmRpbmdTbGlkZXIpID09IDApIHtcclxuICAgICAgICAgIHJldHVybiBjdXJyZW50T3JkaW5hbE51bWJlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb25PZk1vdmVtZW50ID09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3VycmVudE9yZGluYWxOdW1iZXIrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRoZVJlc3RPZlRoZVNjcm9sbChjb3JyZXNwb25kaW5nU2xpZGVyKSB7XHJcbiAgICAgICAgICBjb25zdCBzbGlkZXJXaWR0aFdpdGhTY3JvbGwgPSBjb3JyZXNwb25kaW5nU2xpZGVyLnNjcm9sbFdpZHRoO1xyXG4gICAgICAgICAgY29uc3Qgc2xpZGVyV2lkdGhXaXRob3V0U2Nyb2xsID1cclxuICAgICAgICAgICAgY29ycmVzcG9uZGluZ1NsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuXHJcbiAgICAgICAgICBjb25zdCB0aGVSZXN0T2ZUaGVTY3JvbGwgPVxyXG4gICAgICAgICAgICBzbGlkZXJXaWR0aFdpdGhTY3JvbGwgLVxyXG4gICAgICAgICAgICAoc2xpZGVyV2lkdGhXaXRob3V0U2Nyb2xsICsgY29ycmVzcG9uZGluZ1NsaWRlci5zY3JvbGxMZWZ0KTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhlUmVzdE9mVGhlU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gbW92aW5nU2xpZGVyKG1vdmVUb0VsZW1lbnQpIHtcclxuICAgICAgICBtb3ZlVG9FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgIC8vINCy0LXRgNGC0LjQutCw0LvRjNC90L7QtSDRgNCw0YHQv9C+0LvQvtC20LXQvdC40LVcclxuICAgICAgICAgIGJsb2NrOiBcIm5lYXJlc3RcIixcclxuICAgICAgICAgIC8vINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LUg0YDQsNGB0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICBpbmxpbmU6IFwic3RhcnRcIixcclxuICAgICAgICAgIC8vINC/0LvQsNCy0L3QvtGB0YLRjCDQv9GA0L7QutGA0YPRgtC60LhcclxuICAgICAgICAgIGJlaGFpdm9yOiBcInNtb290aFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U2VyaWFsTnVtYmVyQXR0cmlidXRlKGl0ZW1zKSB7XHJcbiAgICAgIGl0ZW1zLmZvckVhY2goKGN1cnJlbnRJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtc2VyaWFsLW51bWJlclwiLCBgJHtpbmRleH1gKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZsaXBwaW5nU2xpZGVyKCk7XHJcbiIsIi8vIGZ1bmN0aW9uIGZsaXBwaW5nUGFnZXNPbkNvbnRvbHMoKSB7XHJcbi8vICAgICBjb25zdCBibG9ja1dyYXBwZXJDb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGluZy1wYWdlc19fd3JhcHBlci1jb250cm9scycpXHJcbi8vICAgICBjb25zdCBjb2xsZWN0aW9uSXRlbXNDb250cm9sID0gYmxvY2tXcmFwcGVyQ29udHJvbHMucXVlcnlTZWxlY3RvckFsbCgnLmZsaXBwaW5nLXBhZ2VzX19jb250cm9sLWlucHV0JylcclxuLy8gICAgIGNvbnN0IGJsb2NrRmxpcHBpbmdQYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGluZy1wYWdlc19fd3JhcHBlci1pdGVtcycpXHJcblxyXG4vLyAgICAgbGV0IG9ic2VydmVyRm9yV3JhcHBlckJsb2NrUGFnZXMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihzZXREZWZhdWx0UGFyYW0pXHJcbi8vICAgICBvYnNlcnZlckZvcldyYXBwZXJCbG9ja1BhZ2VzLm9ic2VydmUoYmxvY2tGbGlwcGluZ1BhZ2VzLCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSlcclxuXHJcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNldERlZmF1bHRQYXJhbSlcclxuLy8gICAgIGJsb2NrV3JhcHBlckNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbWFuYWdlKVxyXG5cclxuLy8gICAgIGZ1bmN0aW9uIHNldERlZmF1bHRQYXJhbSgpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBzZXQhJyk7XHJcbi8vICAgICAgICAgLy8gc2V0VG9wU2Nyb2xsT25aZXJvKClcclxuLy8gICAgICAgICBkZWxldGluZ0F0dHJpYnV0ZXNDaGVja2VkT25BbGxJbnB1dHMoKVxyXG4vLyAgICAgICAgIHNldEF0dHJpYnV0ZUNoZWNrZWRPbkZpcnN0RWxlbWVudCgpXHJcbi8vICAgICAgICAgaGlkZUFsbEJsb2Nrc0NvbnRyb2xzV2l0aFNlcmlhbE51bWJlcigpXHJcbi8vICAgICAgICAgbGV0IGFycmF5T2ZQYWdlc1N0YXJ0WUNvb3JkaW5hdGVzID0gZ2V0QXJyYXlPZlBhZ2VzU3RhcnRZQ29vcmRpbmF0ZXMoKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2ZQYWdlc1N0YXJ0WUNvb3JkaW5hdGVzKTtcclxuLy8gICAgICAgICAvLyBsZXQgY291bnRGbGlwcGluZ1BhZ2VzID0gY2FsY0NvdW50RmxpcHBpbmdQYWdlcygpXHJcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coY291bnRGbGlwcGluZ1BhZ2VzKTtcclxuLy8gICAgICAgICAvLyBzaG93QmxvY2tzQ29udHJvbHNXaXRoU2VyaWFsTnVtYmVyKClcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBtYW5hZ2UoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuLy8gICAgICAgICByZXR1cm5cclxuICAgICAgICBcclxuLy8gICAgICAgICBsZXQgY291bnRGbGlwcGluZ1BhZ2VzID0gY2FsY0NvdW50RmxpcHBpbmdQYWdlcygpXHJcbi8vICAgICAgICAgbGV0IGFycmF5T2ZQYWdlc1N0YXJ0WENvb3JkaW5hdGVzID0gZ2V0QXJyYXlPZlBhZ2VzU3RhcnRYQ29vcmRpbmF0ZXMoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGxldCBwYWdlU2VyaWFsTnVtYmVyID0gZ2V0Q3VycmVudE51bWJlclBhZ2UoKVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHNjcm9sbFRvQ3VycmVudFBhZ2UoZXZlbnQsIHBhZ2VTZXJpYWxOdW1iZXIpXHJcbi8vICAgICB9XHJcblxyXG5cclxuXHJcbi8vICAgICBmdW5jdGlvbiBkZWxldGluZ0F0dHJpYnV0ZXNDaGVja2VkT25BbGxJbnB1dHMoKSB7XHJcbi8vICAgICAgICAgY29sbGVjdGlvbkl0ZW1zQ29udHJvbC5mb3JFYWNoKGJsb2NrSW5wdXQgPT4ge1xyXG4vLyAgICAgICAgICAgICBibG9ja0lucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gc2V0QXR0cmlidXRlQ2hlY2tlZE9uRmlyc3RFbGVtZW50KCkge1xyXG4vLyAgICAgICAgIGxldCBmaXJzdFNlcmlhbE51bWJlciA9IGJsb2NrV3JhcHBlckNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJyNmbGlwcGluZy1wYWdlc19fcGFnZS0xJylcclxuLy8gICAgICAgICAvLyBsZXQgZmlyc3RTZXJpYWxOdW1iZXIgPSBibG9ja1dyYXBwZXJDb250cm9scy5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCIxXCJdJylcclxuLy8gICAgICAgICBmaXJzdFNlcmlhbE51bWJlci5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBoaWRlQWxsQmxvY2tzQ29udHJvbHNXaXRoU2VyaWFsTnVtYmVyKCkge1xyXG4vLyAgICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMjsgaW5kZXggPCAxMDA7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgLy8gICAgIGxldCBzZWxlY3RvciA9IGBbdmFsdWU9XCIke2luZGV4fVwiXWBcclxuLy8gICAgICAgICAvLyAgICAgbGV0IGJsb2NrV2l0aFNlcmlhbE51bWJlciA9IGJsb2NrV3JhcHBlckNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIC8vICAgICBpZiAoYmxvY2tXaXRoU2VyaWFsTnVtYmVyKSB7XHJcbi8vICAgICAgICAgLy8gICAgICAgICBsZXQgc2VjZXRvcjIgPSBibG9ja1dpdGhTZXJpYWxOdW1iZXIuZ2V0QXR0cmlidXRlKCdpZCcpXHJcbi8vICAgICAgICAgLy8gICAgICAgICBsZXQgbGFiZWwgPSBibG9ja1dyYXBwZXJDb250cm9scy5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3IgPSBcIiR7c2VjZXRvcjJ9XCJdYClcclxuLy8gICAgICAgICAvLyAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ZsaXBwaW5nLXBhZ2VzX19jb250cm9sLWl0ZW0tLWhpZGRlbicpXHJcbi8vICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgLy8gfVxyXG5cclxuLy8gICAgICAgICBjb2xsZWN0aW9uSXRlbXNDb250cm9sLmZvckVhY2goaXRlcmFibGVCbG9jayA9PiB7XHJcbi8vICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBpdGVyYWJsZUJsb2NrLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4vLyAgICAgICAgICAgICBsZXQgY2hlY2tBdHRyaWJ1dGVPbk51bWJlciA9IGF0dHJpYnV0ZSAqIDJcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGlmIChjaGVja0F0dHJpYnV0ZU9uTnVtYmVyICYmIGF0dHJpYnV0ZSAhPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIGxldCBibG9ja0lucHV0ID0gYmxvY2tXcmFwcGVyQ29udHJvbHMucXVlcnlTZWxlY3RvcihgW3ZhbHVlPVwiJHthdHRyaWJ1dGV9XCJgKVxyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yQmxvY2tGb3JIaWRkZW4gPSBibG9ja0lucHV0LmdldEF0dHJpYnV0ZSgnaWQnKVxyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGJsb2NrRm9ySGlkZGVuID0gYmxvY2tXcmFwcGVyQ29udHJvbHMucXVlcnlTZWxlY3RvcihgW2ZvciA9IFwiJHtzZWxlY3RvckJsb2NrRm9ySGlkZGVufVwiXWApXHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIGJsb2NrRm9ySGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2ZsaXBwaW5nLXBhZ2VzX19jb250cm9sLWl0ZW0tLWhpZGRlbicpXHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gZ2V0QXJyYXlPZlBhZ2VzU3RhcnRZQ29vcmRpbmF0ZXMoKSB7IFxyXG4vLyAgICAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gYmxvY2tXcmFwcGVyQ29udHJvbHMuY2xvc2VzdCgnLmZsaXBwaW5nLXBhZ2VzJylcclxuLy8gICAgICAgICBjb25zdCB3cmFwcGVyQ29udGVudCA9IHBhcmVudEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGluZy1wYWdlc19fd3JhcHBlci1pdGVtcycpXHJcbi8vICAgICAgICAgY29uc3QgZnVsbEhlaWdodENvbnRlbnQgPSB3cmFwcGVyQ29udGVudC5zY3JvbGxIZWlnaHRcclxuLy8gICAgICAgICBjb25zdCBoZWlnaHRWaXNpYmxlQ29udGVudCA9IHdyYXBwZXJDb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4vLyAgICAgICAgIGxldCBhcnJheUNvb3JkaW5hdGVzWSA9IFtdXHJcblxyXG4vLyAgICAgICAgIGxldCBjdXJyZW50Q29vcmRpbmF0ZSA9IDBcclxuLy8gICAgICAgICBkbyB7XHJcbi8vICAgICAgICAgICAgIGFycmF5Q29vcmRpbmF0ZXNZLnB1c2goY3VycmVudENvb3JkaW5hdGUpXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRDb29yZGluYXRlICs9IGhlaWdodFZpc2libGVDb250ZW50XHJcblxyXG4vLyAgICAgICAgIH0gd2hpbGUgKGN1cnJlbnRDb29yZGluYXRlIDwgZnVsbEhlaWdodENvbnRlbnQpO1xyXG5cclxuXHJcbi8vICAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZ1bGxIZWlnaHRDb250ZW50OyBpbmRleCArIGhlaWdodFZpc2libGVDb250ZW50KSB7XHJcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuLy8gICAgICAgICAvLyAgICAgLy8gYXJyYXlDb29yZGluYXRlc1kudW5zaGlmdChpbmRleClcclxuLy8gICAgICAgICAvLyB9XHJcblxyXG4vLyAgICAgICAgIHJldHVybiBhcnJheUNvb3JkaW5hdGVzWVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGZsaXBwaW5nUGFnZXNPbkNvbnRvbHMoKSIsImZ1bmN0aW9uIHNsaWRlckluZGljYXRvcigpIHtcclxuICAgIGNvbnN0IGFsbEJsb2Nrc0NvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWNhcmRzX19pbmRpY2F0b3InKVxyXG4gICAgYWxsQmxvY2tzQ29udHJvbC5mb3JFYWNoKChibG9ja1dyYXBwZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaW5pdGlhbGl6YXRpb25TbGlkZXJJbmRpY2F0b3IoYmxvY2tXcmFwcGVyKVxyXG4gICAgICAgIC8vIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIGluaXRpYWxpemF0aW9uU2xpZGVySW5kaWNhdG9yKGJsb2NrV3JhcHBlcilcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXphdGlvblNsaWRlckluZGljYXRvcihibG9ja1dyYXBwZXIpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlckluZGljYXRvciA9IGJsb2NrV3JhcHBlclxyXG4gICAgICAgIGNvbnN0IGluZGljYXRvckZpbGxpbmcgPSB3cmFwcGVySW5kaWNhdG9yLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY2FyZHNfX2luZGljYXRvci1maWxsaW5nJylcclxuICAgICAgICBsZXQgY29ycmVzcG9uZGluZ1NsaWRlciA9IGdldENvcnJlc3BvbmRpbmdTbGlkZXIoKVxyXG4gICAgICAgIGxldCBjb3JyZXNwb25kaW5nU2xpZGVySXRlbXMgPSBnZXRTbGlkZXJJdGVtcygpXHJcbiAgICAgICAgbGV0IGluaXRpYWxGaWxsSW5QZXJjZW50YWdlID0gZ2V0SW5pdGlhbEZpbGxQZXJjZW50YWdlKClcclxuXHJcbiAgICAgICAgbGV0IG9ic2VydmVyRm9yU2xpZGVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobWFuYWdlKVxyXG4gICAgICAgIG9ic2VydmVyRm9yU2xpZGVyLm9ic2VydmUoY29ycmVzcG9uZGluZ1NsaWRlciwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29ycmVzcG9uZGluZ1NsaWRlci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaWxsSW5kaWNhdG9yKVxyXG5cclxuICAgICAgICBtYW5hZ2UoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDb3JyZXNwb25kaW5nU2xpZGVyKCkge1xyXG4gICAgICAgICAgICBsZXQgd3JhcHBlclNsaWRlciA9IHdyYXBwZXJJbmRpY2F0b3IuY2xvc2VzdCgnLnNsaWRlci1jYXJkcycpXHJcbiAgICAgICAgICAgIGxldCBzbGlkZXJCbG9jayA9IHdyYXBwZXJTbGlkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLW5hbWVdJylcclxuICAgICAgICAgICAgaWYgKCFzbGlkZXJCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBhZGQgYXR0cmlidXRlIFtkYXRhLXNsaWRlci1uYW1lXSBmb3IgY2FyZHMgd3JhcHBlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZXJCbG9ja1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2xpZGVySXRlbXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3JyZXNwb25kaW5nU2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNhcmQtd2l0aC1pbmZvXScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5hZ2UoKSB7XHJcblxyXG4gICAgICAgICAgICBjb3JyZXNwb25kaW5nU2xpZGVyID0gZ2V0Q29ycmVzcG9uZGluZ1NsaWRlcigpXHJcbiAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdTbGlkZXJJdGVtcyA9IGdldFNsaWRlckl0ZW1zKClcclxuXHJcbiAgICAgICAgICAgIGlmICghbmVlZEZvclNjcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvd1Njcm9sbCh0cnVlKVxyXG5cclxuICAgICAgICAgICAgaW5pdGlhbEZpbGxJblBlcmNlbnRhZ2UgPSBnZXRJbml0aWFsRmlsbFBlcmNlbnRhZ2UoKVxyXG4gICAgICAgICAgICBzaG93RmlsbGluZyhpbml0aWFsRmlsbEluUGVyY2VudGFnZSwgJyUnKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxJbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFNsaWRlclNjcm9sbEFzQVBlcmNlbnRhZ2UgPSBnZXRTY3JvbGxNb3ZlbWVudFBlcmNlbnRhZ2UoKVxyXG4gICAgICAgICAgICAvLyBzaG93RmlsbGluZyhjdXJyZW50U2xpZGVyU2Nyb2xsQXNBUGVyY2VudGFnZSwgJyUnKVxyXG4gICAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICAgICAgbGV0IGZpbmFsV2lkdGhGb3JGaWxsaW5nSW5QaXhlbCA9IGdldFRoZUZpbmFsRmlsbFdpZHRoSW5QaXhlbCgpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbmFsV2lkdGhGb3JGaWxsaW5nSW5QaXhlbCk7XHJcblxyXG4gICAgICAgICAgICBzaG93RmlsbGluZyhmaW5hbFdpZHRoRm9yRmlsbGluZ0luUGl4ZWwsICdweCcpXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTY3JvbGxNb3ZlbWVudFBlcmNlbnRhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2xpZGVyV2lkdGhXaXRoU2Nyb2xsID0gY29ycmVzcG9uZGluZ1NsaWRlci5zY3JvbGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbGV0IHNsaWRlcldyYXBwZXJXaWR0aCA9IGNvcnJlc3BvbmRpbmdTbGlkZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxXaWR0aCA9IHNsaWRlcldpZHRoV2l0aFNjcm9sbCAtIHNsaWRlcldyYXBwZXJXaWR0aFxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGxPZlRoZVNsaWRlcldyYXBwZXIgPSBjb3JyZXNwb25kaW5nU2xpZGVyLnNjcm9sbExlZnRcclxuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxNb3ZlbWVudFBlcmNlbnRhZ2UgPSBjdXJyZW50U2Nyb2xsT2ZUaGVTbGlkZXJXcmFwcGVyIC8gc2Nyb2xsV2lkdGggKiAxMDBcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY3JvbGxNb3ZlbWVudFBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBNYXRoLmNlaWwoc2Nyb2xsTW92ZW1lbnRQZXJjZW50YWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaGVGaW5hbEZpbGxXaWR0aEluUGl4ZWwoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVsbFdpZHRoSW5QaXhlbHMgPSB3cmFwcGVySW5kaWNhdG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGhJblBpeGVsc09mT25lUGVyY2VudCA9IGZ1bGxXaWR0aEluUGl4ZWxzIC8gMTAwXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsY3VsYXRlZEZpbGxJblBpeGVscyA9IGluaXRpYWxGaWxsSW5QZXJjZW50YWdlICogd2lkdGhJblBpeGVsc09mT25lUGVyY2VudFxyXG4gICAgICAgICAgICAgICAgbGV0IGluaXRpYWxGaWxsSW5QaXhlbCA9IGNhbGN1bGF0ZWRGaWxsSW5QaXhlbHNcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5pdGlhbEZpbGxJblBlcmNlbnRhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aEZyb21DdXJyZW50U2xpZGVyU2Nyb2xsSW5QaXhlbCA9IGdldFdpZHRoRnJvbUN1cnJlbnRTbGlkZXJTY3JvbGwoKVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFdpZHRoRnJvbUN1cnJlbnRTbGlkZXJTY3JvbGwoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsV2lkdGhGb3JGaWxsaW5nID0gd3JhcHBlckluZGljYXRvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1haW5pbmdXaWR0aEZvckZpbGxpbmcgPSB0b3RhbFdpZHRoRm9yRmlsbGluZyAtIGluaXRpYWxGaWxsSW5QaXhlbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvbmVQZXJjZW50T2ZUaGVSZW1haW5pbmdXaWR0aEluUGl4ZWxzID0gcmVtYWluaW5nV2lkdGhGb3JGaWxsaW5nIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoRnJvbUN1cnJlbnRTbGlkZXJTY3JvbGwgPSBjdXJyZW50U2xpZGVyU2Nyb2xsQXNBUGVyY2VudGFnZSAqIG9uZVBlcmNlbnRPZlRoZVJlbWFpbmluZ1dpZHRoSW5QaXhlbHNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGhGcm9tQ3VycmVudFNsaWRlclNjcm9sbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxGaWxsV2lkdGggPSBpbml0aWFsRmlsbEluUGl4ZWwgKyB3aWR0aEZyb21DdXJyZW50U2xpZGVyU2Nyb2xsSW5QaXhlbFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxGaWxsV2lkdGhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxGaWxsUGVyY2VudGFnZSgpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByYW5nZU9mTW92ZW1lbnQgPSBnZXRTZXJpYWxOdW1iZXJSYW5nZSgpXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRTZXJpYWxOdW1iZXJSYW5nZSgpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0QXJyYXlbMF0gPSBnZXRUaGVTdGFydGluZ051bWJlck9mVGhlSXRlbSgpXHJcbiAgICAgICAgICAgICAgICByZXN1bHRBcnJheVsxXSA9IGdldFRoZUxhc3RJdGVtTnVtYmVyVG9TY3JvbGwoKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRBcnJheVswXSA9PSB1bmRlZmluZWQgfHwgcmVzdWx0QXJyYXlbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXJyYXkgPSBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0QXJyYXlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGhlU3RhcnRpbmdOdW1iZXJPZlRoZUl0ZW0oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNsaWRlckNvb3JkaW5hdGVYUmlnaHRTaWRlID0gY29ycmVzcG9uZGluZ1NsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzZXJpYWxOdW1iZXJJdGVtID0gMDsgc2VyaWFsTnVtYmVySXRlbSA8IGNvcnJlc3BvbmRpbmdTbGlkZXJJdGVtcy5sZW5ndGg7IHNlcmlhbE51bWJlckl0ZW0rKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gY29ycmVzcG9uZGluZ1NsaWRlckl0ZW1zW3NlcmlhbE51bWJlckl0ZW1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SXRlbUNvb3JkaW5hdGVYUmlnaHRTaWRlID0gY3VycmVudEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlkZGVuIHBpeGVsIG9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvY2tPZlBpeGVsc0luV2lkdGggPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbUNvb3JkaW5hdGVYUmlnaHRTaWRlIC09IHN0b2NrT2ZQaXhlbHNJbldpZHRoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyQ29vcmRpbmF0ZVhSaWdodFNpZGUgPD0gY3VycmVudEl0ZW1Db29yZGluYXRlWFJpZ2h0U2lkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsTnVtYmVySXRlbS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsTnVtYmVySXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUaGVMYXN0SXRlbU51bWJlclRvU2Nyb2xsKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnVsbFdpZHRoID0gY29ycmVzcG9uZGluZ1NsaWRlci5zY3JvbGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyV2lkdGggPSBjb3JyZXNwb25kaW5nU2xpZGVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG91dHNpZGVGcmFtZUxlZnRTaWRlID0gY29ycmVzcG9uZGluZ1NsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgZnVsbFdpZHRoIC0gd3JhcHBlcldpZHRoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFNlcmlhbE51bWJlciA9IGNvcnJlc3BvbmRpbmdTbGlkZXJJdGVtcy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFNlcmlhbE51bWJlciA9IHJlc3VsdEFycmF5WzBdXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc2VyaWFsTnVtYmVyID0gc3RhcnRTZXJpYWxOdW1iZXI7IHNlcmlhbE51bWJlciA+PSBlbmRTZXJpYWxOdW1iZXI7IHNlcmlhbE51bWJlci0tKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBjb3JyZXNwb25kaW5nU2xpZGVySXRlbXNbc2VyaWFsTnVtYmVyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW1Db29yZGluYXRlWCA9IGN1cnJlbnRJdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRzaWRlRnJhbWVMZWZ0U2lkZSA8PSBjdXJyZW50SXRlbUNvb3JkaW5hdGVYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50SXRlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDBweCAyMHB4IHJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyYW5nZU9mTW92ZW1lbnQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZQYXJ0c1RvRmlsbCA9IHJhbmdlT2ZNb3ZlbWVudFsxXSAtIHJhbmdlT2ZNb3ZlbWVudFswXSArIDFcclxuICAgICAgICAgICAgbGV0IGluaXRpYWxGaWxsV2lkdGhJblBlcmNlbnRhZ2UgPSAxMDAgLyBudW1iZXJPZlBhcnRzVG9GaWxsXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbEZpbGxXaWR0aEluUGVyY2VudGFnZVxyXG5cclxuICAgICAgICAgICAgLy8gc2hvd0luaXRpYWxGaWxsKClcclxuXHJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHNob3dJbml0aWFsRmlsbCgpIHtcclxuICAgICAgICAgICAgLy8gICAgIGluZGljYXRvckZpbGxpbmcuc3R5bGUud2lkdGggPSBgJHtpbml0aWFsRmlsbFdpZHRoSW5QZXJjZW50YWdlfSVgXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG5lZWRGb3JTY3JvbGxpbmcoKSB7XHJcbiAgICAgICAgICAgIGxldCBmdWxsV2lkdGggPSBjb3JyZXNwb25kaW5nU2xpZGVyLnNjcm9sbFdpZHRoXHJcbiAgICAgICAgICAgIGxldCB3cmFwcGVyV2lkdGggPSBjb3JyZXNwb25kaW5nU2xpZGVyLmNsaWVudFdpZHRoXHJcblxyXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlU2Nyb2xsV2lkdGggPSBmdWxsV2lkdGggLSB3cmFwcGVyV2lkdGhcclxuXHJcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVTY3JvbGxXaWR0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd1Njcm9sbChzdGF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgd3JhcHBlckNvbnRyb2xzQW5kSW5kaWNhdG9yID0gd3JhcHBlckluZGljYXRvci5jbG9zZXN0KCcuc2xpZGVyLWNhcmRzX193cmFwcGVyLWZvci1jb250cm9scycpXHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ29udHJvbHNBbmRJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyLWNhcmRzX193cmFwcGVyLWZvci1jb250cm9scy0taGlkZGVuJylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNvbnRyb2xzQW5kSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1jYXJkc19fd3JhcHBlci1mb3ItY29udHJvbHMtLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ0Vycm9yIGluIGRldGVybWluaW5nIHdoZXRoZXIgdG8gc2hvdyBvciBoaWRlIHRoZSBzY3JvbGwhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93RmlsbGluZyh2YWx1ZSwgdW5pdCkge1xyXG4gICAgICAgICAgICAvLyBpbmRpY2F0b3JGaWxsaW5nLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbEZpbGxXaWR0aEluUGVyY2VudGFnZX0lYFxyXG4gICAgICAgICAgICBpbmRpY2F0b3JGaWxsaW5nLnN0eWxlLndpZHRoID0gYCR7dmFsdWV9JHt1bml0fWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuc2xpZGVySW5kaWNhdG9yKCkiXX0=