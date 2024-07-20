
import { Button, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';

export default function Categories() {
 
  return (
    <div
      style={{ fontFamily: '"acumin-pro", "Acumin Pro", "Helvetica Neue" ' }}
    >
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <div style={{ display: 'flex', gap: '5px' }}>
                <span class="material-symbols-outlined">category</span>

                <span>categories</span>
              </div>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <form action="">
                <div>
                  <input type="radio" name="cat" id="category" />
                  &nbsp;&nbsp;
                  <label htmlFor="category">all categories</label>
                </div>
                <div>
                  <input type="radio" name="cat" id="font" />
                  &nbsp;&nbsp;
                  <label htmlFor="font">Fonts</label>
                </div>
                <div>
                  <input type="radio" name="cat" id="temp" />
                  &nbsp;&nbsp;
                  <label htmlFor="temp">Template</label>
                </div>
                <div>
                  <input type="radio" name="cat" id="Vector" />
                  &nbsp;&nbsp;
                  <label htmlFor="Vector">Vectors</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <div style={{ display: 'flex', gap: '5px' }}>
                <span class="material-symbols-outlined">category_search</span>

                <span>File extension</span>
              </div>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <InputGroup>
                <Input
                  type="search"
                  size="lg"
                  placeholder="Search File Extension..."
                  paddingLeft="10px" // Ensure there's space for the icon
                  style={{
                    height: '40px',
                    width: '100%',
                  }}
                />
              </InputGroup>
              <form id="vkft_30" action="">
                <div>
                  <input type="checkbox" name="cat" id="PDF" />
                  &nbsp;&nbsp;
                  <label for="PDF">PDF</label>
                </div>
                <div>
                  <input type="checkbox" name="JPGg" id="JPG" />
                  &nbsp;&nbsp;
                  <label for="JPG">JPG</label>
                </div>
                <div>
                  <input type="checkbox" name="PNGg" id="PNG" />
                  &nbsp;&nbsp;
                  <label for="PNG">PNG</label>
                </div>
                <div>
                  <input type="checkbox" name="PSDd" id="PSD" />
                  &nbsp;&nbsp;
                  <label for="PSD">PSD</label>
                </div>
                <div>
                  <input type="checkbox" name="GIFf" id="GIF" />
                  &nbsp;&nbsp;
                  <label for="GIF">GIF</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <div style={{ display: 'flex', gap: '5px' }}>
                <span class="material-symbols-outlined">sell</span>
                <span>Price</span>
              </div>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: 'repeat(1)',
                  gap: '10px',
                }}
              >
                <div>
                  <Button
                    size="md"
                    height="48px"
                    width="100%"
                    border="2px"
                    borderRadius="50px"
                    borderColor="green.500"
                  >
                    All
                  </Button>
                </div>
                <div>
                  <Button
                    size="md"
                    height="48px"
                    width="100%"
                    border="2px"
                    borderRadius="50px"
                    borderColor="green.500"
                  >
                    Free
                  </Button>
                </div>
                <div>
                  <Button
                    size="md"
                    height="48px"
                    width="100%"
                    border="2px"
                    borderRadius="50px"
                    borderColor="green.500"
                  >
                    Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
