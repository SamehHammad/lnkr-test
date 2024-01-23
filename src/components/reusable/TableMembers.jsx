"use client";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonMain from "./ButtonMain";
import ButtonSeconday from "./ButtonSeconday";

export default function TableMembers({
  header,
  add,
  TABS,
  TABLE_HEAD,
  TABLE_ROWS,
  filter,
}) {
  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState("");
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchedMem =
      TABLE_ROWS &&
      TABLE_ROWS.filter((m) =>
        m.full_name.toLowerCase().includes(searchText.toLowerCase())
      );
    setMembers(searchedMem);
  }, [searchText]);

  useEffect(() => {
    const filteredMem =
      TABLE_ROWS && TABLE_ROWS.filter((m) => (type ? m.age < type : m));
    setMembers(filteredMem);
  }, [type]);

  const pageSize = 10;
  const totalMembers = members && members.length;
  const totalPages = Math.ceil(totalMembers / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalMembers - 1);
  const displayedMembers = members && members.slice(startIndex, endIndex + 1);

  return (
    <Card className="h-full w-full text-lightText">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" className="text-lightText">
              {header}
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row text-lightText">
            <ButtonSeconday children={"view all"} />
            <ButtonMain
              icon={<UserPlusIcon strokeWidth={2} className="h-4 w-4" />}
              children={add}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {filter ? (
            <Tabs value="all" className="w-full md:w-max flex gap-5">
              <Typography
                color="gray"
                className="mt-1 font-bolder text-softText "
              >
                Filters :
              </Typography>
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    className="whitespace-nowrap text-lightText"
                    onClick={() => setType(value)}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          ) : (
            <div> </div>
          )}
          <div className="w-full md:w-72 text-lightText">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-softText" />}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 text-center"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 text-lightText"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedMembers?.map(
              ({ id, full_name, age, employer, medical_network }, index) => {
                const isLast = index === TABLE_ROWS && TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Link
                        href={`/members/${id}/profile/info`}
                        className="flex items-center gap-3"
                      >
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-lightText"
                          >
                            {id}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70 text-lightText"
                          ></Typography>
                        </div>
                      </Link>
                    </td>{" "}
                    <td className={classes}>
                      <Link
                        href={`/members/${id}/profile/info`}
                        className="flex items-center gap-3"
                      >
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-lightText"
                          >
                            {full_name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70 text-lightText"
                          ></Typography>
                        </div>
                      </Link>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-lightText"
                        >
                          {age}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-lightText"
                        >
                          {employer}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {medical_network}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Link href={`/members/${id}/profile/info`}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <IconButton
              key={page}
              variant={page === currentPage ? "outlined" : "text"}
              size="sm"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </IconButton>
          ))}
        </div>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
