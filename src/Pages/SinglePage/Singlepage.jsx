import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataSingle } from '../../Redux/ProductData/action';
import { Button, ButtonGroup, Flex, IconButton, Image } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
// import { color } from 'framer-motion';

export const SinglePage = () => {
  const { loading, data, error } = useSelector((state) => state.Data);
  console.log(data);
  const dispatch = useDispatch();
  const { id } = useParams();

  const filterdata = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    getDataSingle(dispatch, id);
  }, []);
  console.log(filterdata);
  return (
    <>
      <div className="page">
        <Image
          borderRadius="full"
          boxSize="80px"
          backgroundColor={'hsl(0, 3%, 15%)'}
          mt={'30px'}
          ml={'60px'}
          src={filterdata.AuthorImg}
          alt="Dan Abramov"
        />
        <span>
          <h1 className="titles">{filterdata.title}</h1>
          <h3 className="author">{filterdata.Author}</h3>
        </span>
      </div>
      <div className="single">
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button className="save">Save</Button>
          <IconButton
            aria-label="Add to friends"
            className="save"
            icon={<AddIcon />}
          />
        </ButtonGroup>
        <img className="singleimg" src={filterdata.imageurl} alt="" />
        <div>
          {filterdata.imageurlone && filterdata.imageurlone.map((ele) => {
            return (
              <>
                <ButtonGroup size="sm" isAttached variant="outline">
                  <Button className="save">Save</Button>
                  <IconButton
                    aria-label="Add to friends"
                    className="save"
                    icon={<AddIcon />}
                  />
                </ButtonGroup>
                <img className="singleimg" src={ele} alt="" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
